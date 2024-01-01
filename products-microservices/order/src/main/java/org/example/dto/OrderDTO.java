package org.example.dto;

import java.time.LocalDateTime;
import java.util.List;

public record OrderDTO(
        Long id,
        String address,
        LocalDateTime deliveryTime,
        List<OrderItemDTO> orderItems
) {}