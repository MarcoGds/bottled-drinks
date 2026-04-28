package com.example.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.CartItem;
import com.example.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

    private final CartService service;

    public CartController(CartService service) {
        this.service = service;
    }

    //@PostMapping
    //public CartItem addToCart(@RequestBody CartItem item) {
    //    System.out.println("Saving: " + item.getProductId());
    //    return service.save(item);
    //}

    @GetMapping("/{userId}")
    public List<CartItem> get(@PathVariable Long userId) {
        return service.getByUser(userId);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PostMapping
    public CartItem addToCart(@RequestBody CartItem item) {
    System.out.println("userId: " + item.getUserId());
    return repository.save(item);
    }
}