package org.example.jwt;

import jakarta.validation.constraints.NotEmpty;

public record JWTValidationRequestBody(
        @NotEmpty(message = "token must not be empty")
        String token
) {}
