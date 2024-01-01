package org.example.dto;

import lombok.RequiredArgsConstructor;
import org.example.db.Order;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class OrderDTOMapper implements Function<Order, OrderDTO> {
    private final OrderItemDTOMapper orderItemDTOMapper;

    @Override
    public OrderDTO apply(Order order) {
        List<OrderItemDTO> orderItemsDTOs =
                order.getOrderItems().stream()
                        .map(orderItemDTOMapper)
                        .collect(Collectors.toList());

        return new OrderDTO(
                order.getId(),
                order.getAddress(),
                order.getDeliveryTime(),
                orderItemsDTOs
        );
    }
}
