package com.guiding.eagle.api.config;

import com.guiding.eagle.api.services.CityService;
import com.guiding.eagle.api.services.PackageService;
import com.guiding.eagle.api.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class StartUp implements CommandLineRunner {
    private final UserService userService;
    private final CityService cityService;
    private final PackageService packageService;
    @Override
    public void run(String... args) throws Exception {
        cityService.initData();
        userService.initData();
        packageService.initData();
    }
}
