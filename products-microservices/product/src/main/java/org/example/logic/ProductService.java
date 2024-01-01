package org.example.logic;

import lombok.RequiredArgsConstructor;
import org.example.db.Product;
import org.example.db.ProductRepository;
import org.example.dto.ProductDTO;
import org.example.dto.ProductDTOMapper;
import org.example.util.UpdateUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository repository;
    private final ProductDTOMapper dtoMapper;
    private final UpdateUtil updateUtil;

    public List<ProductDTO> getProducts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> productsPage = repository.findAll(pageable);

        return productsPage.getContent()
                .stream()
                .map(dtoMapper)
                .collect(Collectors.toList());
    }

    public void createProduct(CreateProductRequest request) {
        if (repository.existsByName(request.name())) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "org.example.db.Product with this name already exists"
            );
        }
        repository.save(
                Product.builder()
                        .name(request.name())
                        .description(request.description())
                        .price(request.price())
                        .build()
        );
    }

    public void deleteProduct(Long productId) {
        Product product = repository.findById(productId)
                .orElseThrow(() -> new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "org.example.db.Product with this id doesnt exist"
                        )
                );

        repository.delete(product);
    }

    public void updateProduct(Long productId, UpdateProductRequest request) {
        Product product = repository.findById(productId)
                .orElseThrow(() -> new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "org.example.db.Product with this id doesnt exist"
                        )
                );

        boolean changes = false;

        if (!updateUtil.isFieldNullOrWithoutChange(product.getName(), request.name())) {
            if (repository.existsByName(request.name())) {
                throw new ResponseStatusException(
                        HttpStatus.BAD_REQUEST,
                        "Provided name is already in use"
                );
            }
            changes = true;
            product.setName(request.name());
        }

        if (!updateUtil.isFieldNullOrWithoutChange(product.getDescription(), request.description())) {
            changes = true;
            product.setDescription(request.description());
        }

        if (!updateUtil.isFieldNullOrWithoutChange(product.getDescription(), request.description())) {
            changes = true;
            product.setDescription(request.description());
        }

        if (!(request.price() == null || product.getPrice().compareTo(request.price()) == 0)) {
            changes = true;
            product.setPrice(request.price());
        }

        if (!changes) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "No data changes found"
            );
        }

        repository.save(product);
    }

    public boolean existsById(Long productId) {
        return repository.existsById(productId);
    }
}
