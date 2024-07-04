package com.guiding.eagle.api.services;

import com.guiding.eagle.api.dto.city.CityRead;
import com.guiding.eagle.api.entities.City;
import com.guiding.eagle.api.repositories.CityRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class CityService {
    private final CityRepository cityRepository;


    public List<CityRead> getAll() {
        return cityRepository.getAll();
    }

    public void initData() {
        /*Optional<City> tirana = cityRepository.findByName("Tirana");
        if(tirana.isEmpty()) {
            City tir = new City();
            tir.setName("Tirana");
            tir.setDescription("Tirana is the capital of Albania");
            cityRepository.save(tir);
        }
        else {
            log.info("Tirana city is present in database");
        }*/

        cityRepository.findByName("Tirana").map(o -> {
            log.info("Tirana city is present in database");
            return o;
        }).orElseGet(() -> {
            City tir = new City();
            tir.setName("Tirana");
            tir.setDescription("Tirana is the capital of Albania");
            cityRepository.save(tir);
            return tir;
        });

        cityRepository.findByName("Durres").map(o -> {
            log.info("Durres city is present in database");
            return o;
        }).orElseGet(() -> {
            City tir = new City();
            tir.setName("Durres");
            tir.setDescription("Durres city is one of the most frequented sea side cities in central Albania!");
            cityRepository.save(tir);
            return tir;
        });

        cityRepository.findByName("Shkodra").map(o -> {
            log.info("Shkodra city is present in database");
            return o;
        }).orElseGet(() -> {
            City tir = new City();
            tir.setName("Shkodra");
            tir.setDescription("Shkodra city is one of the most frequented city in north Albania!");
            cityRepository.save(tir);
            return tir;
        });

        cityRepository.findByName("Gjirokastra").map(o -> {
            log.info("Gjirokastra city is present in database");
            return o;
        }).orElseGet(() -> {
            City tir = new City();
            tir.setName("Gjirokastra");
            tir.setDescription("Gjirokastra city is one of the most frequented city in south Albania!");
            cityRepository.save(tir);
            return tir;
        });
    }
}
