package org.example.logic;

import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.admin.NewTopic;
import org.example.clients.product.ProductClient;
import org.example.db.Order;
import org.example.db.OrderDeliverySpeed;
import org.example.db.OrderRepository;
import org.example.dto.OrderDTO;
import org.example.dto.OrderDTOMapper;
import org.example.dto.OrderSummaryDTO;
import org.example.dto.OrderSummaryDTOMapper;
import org.example.kafka.DeleteOrderEvent;
import org.example.kafka.SaveOrderEvent;
import org.example.kafka.events.OrderEventType;
import org.example.kafka.events.OrderNotificationEvent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository repository;
    private final OrderDTOMapper orderDTOMapper;
    private final OrderSummaryDTOMapper orderSummaryDTOMapper;
    private final ProductClient productClient;
    private final NewTopic saveOrderTopic;
    private final NewTopic deleteOrderTopic;
    private final NewTopic orderNotificationTopic;
    private final KafkaTemplate<String, SaveOrderEvent> saveOrderKafkaTemplate;
    private final KafkaTemplate<String, DeleteOrderEvent> deleteOrderKafkaTemplate;
    private final KafkaTemplate<String, OrderNotificationEvent> notificationKafkaTemplate;

    public List<OrderSummaryDTO> getOrders(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Order> orderPage = repository.findAll(pageable);

        return orderPage.getContent()
                .stream()
                .map(orderSummaryDTOMapper)
                .collect(Collectors.toList());
    }

    public OrderDTO getOrder(Long orderId) {
        Order order = repository.findById(orderId)
                .orElseThrow(() -> new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Order with given id not found"
                        )
                );
        return orderDTOMapper.apply(order);
    }

    private void validateOrderItemsIds(List<CreateOrderItemData> orderItems){
        for (CreateOrderItemData orderItem : orderItems) {
            Long productId = orderItem.productId();
            boolean productExists = productClient.existsById(productId);
            if (!productExists) {
                throw new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Product with id [%s] not found".formatted(productId)
                );
            }
        }
    }

    public void createOrder(CreateOrderRequest request) {
        validateOrderItemsIds(request.orderItems());

        LocalDateTime deliveryTime =
                request.deliverySpeed().equals(OrderDeliverySpeed.EXPRESS) ?
                        LocalDateTime.now().plusDays(3) :
                        LocalDateTime.now().plusDays(9);

        Order order = Order.builder()
                        .address(request.address())
                        .deliveryTime(deliveryTime)
                        .build();

        saveOrderKafkaTemplate.send(
               saveOrderTopic.name(),
                new SaveOrderEvent(order, request.orderItems())
        );

        notificationKafkaTemplate.send(
                orderNotificationTopic.name(),
                new OrderNotificationEvent(OrderEventType.PLACED)
        );
    }

    public void completeOrder(Long orderId) {
        if (!repository.existsById(orderId)) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Order with given id not found"
            );
        }

        deleteOrderKafkaTemplate.send(
                deleteOrderTopic.name(),
                new DeleteOrderEvent(orderId)
        );

        notificationKafkaTemplate.send(
                orderNotificationTopic.name(),
                new OrderNotificationEvent(OrderEventType.COMPLETED)
        );
    }
}
