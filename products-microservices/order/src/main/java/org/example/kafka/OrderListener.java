package org.example.kafka;

import lombok.RequiredArgsConstructor;
import org.example.db.Order;
import org.example.db.OrderItem;
import org.example.db.OrderItemRepository;
import org.example.db.OrderRepository;
import org.example.logic.CreateOrderItemData;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OrderListener {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    @KafkaListener(topics = "save-order", groupId = "groupId")
    void saveOrderListener(SaveOrderEvent event) {
        Order order = orderRepository.saveAndFlush(event.order());

        for (CreateOrderItemData orderItem : event.orderItems()) {
            orderItemRepository.save(
                    OrderItem.builder()
                            .order(order)
                            .productId(orderItem.productId())
                            .quantity(orderItem.quantity())
                            .build()
            );
        }

        System.out.println("Order created with id: " + order.getId());
    }

    @KafkaListener(topics = "delete-order", groupId = "groupId")
    void deleteOrderListener(DeleteOrderEvent event) {
        orderRepository.deleteById(event.orderId());

        System.out.println("Order with id: " + event.orderId() + " deleted");
    }
}
