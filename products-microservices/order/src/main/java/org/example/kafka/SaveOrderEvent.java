package org.example.kafka;


import org.example.logic.CreateOrderItemData;
import org.example.db.Order;

import java.util.List;

public record SaveOrderEvent(
        Order order,
        List<CreateOrderItemData> orderItems
) {
}
