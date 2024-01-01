package org.example.dto;

import org.example.db.OrderItem;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class OrderItemDTOMapper implements Function<OrderItem, OrderItemDTO> {
    @Override
    public OrderItemDTO apply(OrderItem orderItem) {
        return new OrderItemDTO(
                orderItem.getProductId(),
                orderItem.getOrder().getId(),
                orderItem.getQuantity()
        );
    }
}
