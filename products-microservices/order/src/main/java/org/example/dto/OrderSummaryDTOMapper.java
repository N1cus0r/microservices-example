package org.example.dto;

import org.example.db.Order;
import org.example.dto.OrderSummaryDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class OrderSummaryDTOMapper implements Function<Order, OrderSummaryDTO> {
    @Override
    public OrderSummaryDTO apply(Order order) {
        return new OrderSummaryDTO(
                order.getId(),
                order.getAddress(),
                order.getDeliveryTime()
        );
    }
}
