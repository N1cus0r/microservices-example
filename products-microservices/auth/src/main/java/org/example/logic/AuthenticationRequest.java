package org.example.logic;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public record AuthenticationRequest(
        @Email
        @NotEmpty(message = "email must not be empty")
        String email,
        @NotEmpty(message = "password must not be empty")
        String password
) {}