package org.example.dto;

public record OrderItemDTO(
        Long productId,
        Long orderId,
        Integer quantity
) {}
