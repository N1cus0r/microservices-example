package org.example.logic;

public record CreateOrderItemData(
        Long productId,
        Integer quantity
) {}
