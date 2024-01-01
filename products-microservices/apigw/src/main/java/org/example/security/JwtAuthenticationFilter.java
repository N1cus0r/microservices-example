package org.example.security;

import org.example.clients.auth.AuthClient;
import org.example.clients.auth.JWTValidationRequest;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.support.ServerWebExchangeUtils;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
public class JwtAuthenticationFilter implements GlobalFilter, Ordered {
    private final AuthClient authClient;

    public JwtAuthenticationFilter(@Lazy AuthClient authClient) {this.authClient = authClient;}

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        Route attribute = exchange.getAttribute(ServerWebExchangeUtils.GATEWAY_ROUTE_ATTR);

        String application = attribute.getId();

        if (application.equals("auth") ||
                (application.equals("product") &&
                        exchange.getRequest().getMethod().equals(HttpMethod.GET)) ||
                (application.equals("order") &&
                        exchange.getRequest().getMethod().equals(HttpMethod.POST))
        ) {
            return chain.filter(exchange);
        }

        List<String> authHeaders = exchange.getRequest().getHeaders().get("Authorization");

        if (authHeaders == null || authHeaders.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "No token found"
            );
        }

        String token = authHeaders.get(0).substring(6);

        return authClient.validateJWT(new JWTValidationRequest(token))
                .then(Mono.defer(() -> {
                    return chain.filter(exchange);
                }))
                .onErrorResume(error -> {
                    throw new ResponseStatusException(
                            HttpStatus.UNAUTHORIZED,
                            "Invalid token"
                    );
                });
    }

    @Override
    public int getOrder() {
        return Ordered.LOWEST_PRECEDENCE;
    }
}
