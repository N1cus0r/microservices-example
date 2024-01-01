package org.example.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {
    private ApiError generateApiError(
            String method,
            Integer statusCode,
            String requestUri,
            String message
    ) {
        return new ApiError(
                method,
                statusCode,
                requestUri,
                message,
                LocalDateTime.now()
        );
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ApiError> handleResponseStatusException(
            ResponseStatusException ex,
            HttpServletRequest request
    ) {
        HttpStatus responseStatus = HttpStatus.valueOf(ex.getBody().getStatus());

        return new ResponseEntity<>(
                generateApiError(
                        request.getMethod(),
                        ex.getBody().getStatus(),
                        request.getRequestURI(),
                        ex.getReason()
                ), responseStatus);
    }
}
