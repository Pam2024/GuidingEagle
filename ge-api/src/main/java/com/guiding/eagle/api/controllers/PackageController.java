package com.guiding.eagle.api.controllers;

import com.guiding.eagle.api.dto.PackRead;
import com.guiding.eagle.api.dto.user.UserRead;
import com.guiding.eagle.api.services.PackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/packages")
public class PackageController {
    private final PackageService packageService;

    @GetMapping("/featured")
    public List<PackRead> getFeaturedUsers() {
        return packageService.getFeaturedUsers();
    }
    @GetMapping("")
    public List<PackRead> getAll() {
        return  packageService.getAll();

    }
}
