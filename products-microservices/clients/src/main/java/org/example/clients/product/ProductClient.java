package org.example.clients.product;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "product", url = "${clients.product.url}")
public interface ProductClient {
    @GetMapping("existsById/{productId}")
    boolean existsById(@PathVariable("productId") Long productId);
}
