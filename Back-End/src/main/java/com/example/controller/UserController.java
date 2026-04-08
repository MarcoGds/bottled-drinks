package com.example.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.LoginRequest;
import com.example.dto.RegisterRequest;
import com.example.model.User;
import com.example.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterRequest request) {
        
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email já registrado!");
        }

        User newUser = new User();
        newUser.setFullName(request.getFullName());
        newUser.setEmail(request.getEmail());
        
        newUser.setPasswordHash(request.getPassword()); 
        userRepository.save(newUser);

        return ResponseEntity.ok("Usuário registrado com sucesso!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            if (user.getPasswordHash().equals(loginRequest.getPassword())) {
                Map<String, String> responseData = new HashMap<>();
                responseData.put("fullName", user.getFullName());
                responseData.put("email", user.getEmail());

                return ResponseEntity.ok(responseData);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro: Senha incorreta.");
            }
        } 
        
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Erro: Usuário não encontrado.");
    }

}