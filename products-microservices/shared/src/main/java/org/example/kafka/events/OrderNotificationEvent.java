package org.example.kafka.events;

public record OrderNotificationEvent(
    OrderEventType type
) {}
