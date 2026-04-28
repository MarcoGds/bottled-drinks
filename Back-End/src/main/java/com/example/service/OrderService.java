package com.example.service;

import com.example.model.*;
import com.example.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepo;
    private final OrderItemRepository orderItemRepo;
    private final CartItemRepository cartRepo;

    public OrderService(OrderRepository orderRepo,
                        OrderItemRepository orderItemRepo,
                        CartItemRepository cartRepo) {
        this.orderRepo = orderRepo;
        this.orderItemRepo = orderItemRepo;
        this.cartRepo = cartRepo;
    }

    public Order checkout(Long userId) {

        List<CartItem> cartItems = cartRepo.findByUserId(userId);

        Order order = new Order();
        order.setUserId(userId);
        order.setCreatedAt(LocalDateTime.now());
        order.setStatus("PROCESSING");

        order = orderRepo.save(order);

        double total = 0;

        for (CartItem item : cartItems) {

            OrderItem orderItem = new OrderItem();
            orderItem.setOrderId(order.getId());
            orderItem.setProductId(item.getProductId());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setPrice(0.0); // can improve later

            orderItemRepo.save(orderItem);
        }

        order.setTotalPrice(total);
        orderRepo.save(order);

        cartRepo.deleteAll(cartItems);

        return order;
    }

    public List<Order> getOrders(Long userId) {
        return orderRepo.findByUserId(userId);
    }
}