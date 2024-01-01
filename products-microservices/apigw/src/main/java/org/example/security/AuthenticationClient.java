package org.example.security;

import feign.RequestLine;
import reactor.core.publisher.Flux;

public interface AuthenticationClient {
    @RequestLine("GET api/v1/auth")
    Flux<Void> hello();
}
