package com.example.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.CartItem;
import com.example.model.Product;
import com.example.repository.CartItemRepository;
import com.example.repository.ProductRepository;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "*")
public class CartController {

    private final CartItemRepository repository;
    private final ProductRepository productRepository;

    public CartController(CartItemRepository repository, ProductRepository productRepository) {
        this.repository = repository;
        this.productRepository = productRepository;
    }

    @PostMapping
    public CartItem addToCart(@RequestBody CartItem item) {

    List<CartItem> existingItems = repository.findByUserId(item.getUserId());

    for (CartItem existing : existingItems) {
        if (existing.getProductId().equals(item.getProductId())) {

            existing.setQuantity(existing.getQuantity() + item.getQuantity());
            return repository.save(existing);
        }
    }

    return repository.save(item);
    }

    @GetMapping("/{userId}")
    public List<CartItem> getCart(@PathVariable Long userId) {
        List<CartItem> cart = repository.findByUserId(userId);

        for (CartItem item : cart) {
            Product product = productRepository
                .findById(item.getProductId())
                .orElse(null);

            if (product != null) {
                item.setProductName(product.getName());
                item.setProductPrice(product.getPrice());
            }
        }

        return cart;
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        repository.deleteById(id);
    }
    
    @PutMapping("/{id}")
    public CartItem updateQuantity(@PathVariable Long id, @RequestBody CartItem updatedItem) {
        CartItem item = repository.findById(id).orElseThrow();

        item.setQuantity(updatedItem.getQuantity());

    return repository.save(item);
}
}