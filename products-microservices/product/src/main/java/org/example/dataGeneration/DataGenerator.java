package org.example.dataGeneration;

import com.github.javafaker.Faker;
import lombok.RequiredArgsConstructor;
import org.example.db.Product;
import org.example.db.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
@Profile("docker")
@RequiredArgsConstructor
public class DataGenerator implements CommandLineRunner {
    private final ProductRepository repository;
    private final Faker FAKER = new Faker();

    @Override
    public void run(String... args) throws Exception {
        for (int i = 0; i < 20; i++) {
            repository.save(
                    Product.builder()
                            .name(FAKER.commerce().productName())
                            .description(FAKER.lorem().paragraph(5))
                            .price(new BigDecimal(FAKER.commerce().price()))
                            .build()
            );
        }
    }
}
