package org.example.logic;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;

public record CreateProductRequest(
        @NotNull(message = "Name must not be empty")
        String name,
        @NotNull(message = "Description must not be empty")
        String description,
        @Min(value = 1, message = "Must be a positive number")
        BigDecimal price
) {}
