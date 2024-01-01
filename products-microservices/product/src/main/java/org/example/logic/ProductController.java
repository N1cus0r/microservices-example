package org.example.logic;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.dto.ProductDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService service;

    @GetMapping
    public List<ProductDTO> getProducts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "50") int size) {
        return service.getProducts(page, size);
    }

    @PostMapping
    public void createProduct(@Valid @RequestBody CreateProductRequest request) {
        System.out.println("Creating product");
        service.createProduct(request);
    }

    @PutMapping("{productId}")
    public void updateProduct(@PathVariable("productId") Long productId, @RequestBody UpdateProductRequest request) {
        service.updateProduct(productId, request);
    }

    @DeleteMapping("{productId}")
    public void deleteProduct(@PathVariable("productId") Long productId) {
        service.deleteProduct(productId);
    }

    // maybe do a POST endpoint that gets a list of productIds and validates them at once
    @GetMapping("existsById/{productId}")
    public boolean existsById(@PathVariable("productId") Long productId) {
        return service.existsById(productId);
    }
}
