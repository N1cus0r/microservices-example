package org.example.kafka.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class KafkaTopicConfig {
    @Bean
    public NewTopic saveOrderTopic(){
        return TopicBuilder
                .name("save-order")
                .build();
    };

    @Bean
    public NewTopic deleteOrderTopic(){
        return TopicBuilder
                .name("delete-order")
                .build();
    };

    @Bean
    public NewTopic orderNotificationTopic(){
        return TopicBuilder
                .name("order-notification")
                .build();
    };

}
