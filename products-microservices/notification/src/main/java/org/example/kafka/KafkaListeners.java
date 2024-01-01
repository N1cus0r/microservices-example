package org.example.kafka;

import org.example.kafka.events.OrderNotificationEvent;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaListeners {
    @KafkaListener(topics = "order-notification", groupId = "groupId")
    void orderNotificationListener(OrderNotificationEvent event) {
        System.out.println("Order event of type: " + event.type());
    }
}
