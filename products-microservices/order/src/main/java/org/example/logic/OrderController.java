package org.example.logic;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.dto.OrderDTO;
import org.example.dto.OrderSummaryDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService service;


    @GetMapping
    public List<OrderSummaryDTO> getOrders(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "50") int size) {
        return service.getOrders(page, size);
    }

    @GetMapping("{orderId}")
    public OrderDTO getOrder(
            @PathVariable("orderId") Long orderId
    ){
        return service.getOrder(orderId);
    }


    @PostMapping
    public void createOrder(
            @Valid @RequestBody CreateOrderRequest request
    ) {
        service.createOrder(request);
    }


    @PutMapping("complete/{orderId}")
    public void completeOrder(
            @PathVariable("orderId") Long orderId
    ) {
        service.completeOrder(orderId);
    }
}
