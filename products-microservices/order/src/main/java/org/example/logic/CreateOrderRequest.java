package org.example.logic;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.example.db.OrderDeliverySpeed;

import java.util.List;

public record CreateOrderRequest(
        @NotNull(message = "Name must not be empty")
        String address,
        @NotNull(message = "Delivery speed name must not be empty")
        OrderDeliverySpeed deliverySpeed,
        @NotEmpty(message = "Order should contain al least one product")
        List<CreateOrderItemData> orderItems
) {}
