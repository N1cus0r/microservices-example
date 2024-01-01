package org.example.dto;

import java.time.LocalDateTime;

public record OrderSummaryDTO(
        Long id,
        String address,
        LocalDateTime deliveryTime
) {}
