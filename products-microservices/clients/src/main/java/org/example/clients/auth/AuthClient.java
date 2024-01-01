package org.example.clients.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import reactivefeign.spring.config.ReactiveFeignClient;
import reactor.core.publisher.Mono;

@ReactiveFeignClient(name = "auth", url = "${clients.auth.url}")
public interface AuthClient {
    @GetMapping("ping")
    Mono<String> ping();

    @PostMapping("validateJwt")
    Mono<Void> validateJWT(@RequestBody JWTValidationRequest request);
}
