package com.guiding.eagle.api.controllers;


import com.guiding.eagle.api.dto.user.UserFilter;
import com.guiding.eagle.api.dto.user.UserLogin;
import com.guiding.eagle.api.dto.user.UserRead;
import com.guiding.eagle.api.dto.user.UserRegister;
import com.guiding.eagle.api.entities.User;
import com.guiding.eagle.api.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import response.LoginResponse;

import java.util.List;

@RestController
@CrossOrigin("*")
@AllArgsConstructor
@RequestMapping("users")
public class UserController {
    private final UserService userService;

    @GetMapping("/featured")
    public List<UserRead> getFeaturedUsers() {
        return userService.getFeaturedUsers();
    }

    @PostMapping("/api/sign-up")
    public User signUp(@RequestBody UserRegister userRegister) {
        return userService.saveUser(userRegister);
    }

    @PostMapping("/api/login")
    public ResponseEntity<LoginResponse> login(@RequestBody UserLogin userLogin){
       LoginResponse loginResponse =userService.loginUser( userLogin);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/list")
    public List<UserRead> getList(UserFilter request) {
        return userService.getList(request);
    }
}
