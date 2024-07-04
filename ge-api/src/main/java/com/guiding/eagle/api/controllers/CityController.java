package com.guiding.eagle.api.controllers;

import com.guiding.eagle.api.dto.city.CityRead;
import com.guiding.eagle.api.services.CityService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/cities")
public class CityController {
    private final CityService cityService;

    @GetMapping("")
    public List<CityRead> getAll() {
        return cityService.getAll();
    }
}
