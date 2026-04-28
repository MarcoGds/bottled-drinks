package com.example.service;

import com.example.model.CartItem;
import com.example.repository.CartItemRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartService {

    private final CartItemRepository repository;

    public CartService(CartItemRepository repository) {
        this.repository = repository;
    }

    public CartItem save(CartItem item) {
        return repository.save(item);
    }

    public List<CartItem> getByUser(Long userId) {
        return repository.findByUserId(userId);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public void clear(Long userId) {
        List<CartItem> items = repository.findByUserId(userId);
        repository.deleteAll(items);
    }
}