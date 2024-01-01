package org.example.logic;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Null;

import java.math.BigDecimal;

public record UpdateProductRequest(
        String name,
        String description,
        @Min(value = 1, message = "Must be a positive number")
        @Null(message = "Price must be null or a positive number")
        BigDecimal price
) {}
