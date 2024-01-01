package org.example.exception;

import java.time.LocalDateTime;

public record ApiError(
        String method,
        Integer statusCode,
        String requestUri,
        String message,
        LocalDateTime localDateTime
) {}
