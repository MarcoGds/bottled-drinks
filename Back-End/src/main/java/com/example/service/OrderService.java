package com.example.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.model.CartItem;
import com.example.model.Order;
import com.example.model.OrderItem;
import com.example.model.Product;
import com.example.repository.CartItemRepository;
import com.example.repository.OrderItemRepository;
import com.example.repository.OrderRepository;
import com.example.repository.ProductRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepo;
    private final OrderItemRepository orderItemRepo;
    private final CartItemRepository cartRepo;
    private final ProductRepository productRepo;

    public OrderService(OrderRepository orderRepo,
                        OrderItemRepository orderItemRepo,
                        CartItemRepository cartRepo,
                        ProductRepository productRepo) {
        this.orderRepo = orderRepo;
        this.orderItemRepo = orderItemRepo;
        this.cartRepo = cartRepo;
        this.productRepo = productRepo;
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

            Product product = productRepo.findById(item.getProductId())
                    .orElseThrow();
            
            double subtotal = product.getPrice() * item.getQuantity();
            
            total += subtotal;

            OrderItem orderItem = new OrderItem();
            orderItem.setOrderId(order.getId());
            orderItem.setProductId(item.getProductId());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setPrice(product.getPrice());

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