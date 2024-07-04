package com.guiding.eagle.api.services;

import com.guiding.eagle.api.dto.PackRead;
import com.guiding.eagle.api.entities.Package;
import com.guiding.eagle.api.repositories.PackageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PackageService {
    private final PackageRepository packageRepository;

    public List<PackRead> getAll() {
        return packageRepository.getAll();
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

        packageRepository.findByName("South Loop").map(o -> {
            log.info("South Loop package is present in database");
            return o;
        }).orElseGet(() -> {
            Package sl = new Package();
            sl.setName("South Loop");
            sl.setDescription("South Loop Description ");
            sl.setPrice(250);
            sl.setSlots(20);
            Instant start = Instant.parse("2024-05-20T00:00:00Z");
            sl.setStart(start);
            sl.setDuration(5);
            sl.setFeatured(true);
            packageRepository.save(sl);
            return sl;
        });

        packageRepository.findByName("Central Albania").map(o -> {
            log.info("Central Albania Package is present in database");
            return o;
        }).orElseGet(() -> {
            Package ca = new Package();
            ca.setName("Central Albania");
            ca.setDescription("Central Albania Description ");
            ca.setPrice(180);
            ca.setSlots(20);
            ca.setFeatured(true);
            Instant start = Instant.parse("2024-05-20T00:00:00Z");
            ca.setStart(start);
            ca.setDuration(4);
            packageRepository.save(ca);
            return ca;
        });

        packageRepository.findByName("North Loop").map(o -> {
            log.info("North Loop Package is present in database");
            return o;
        }).orElseGet(() -> {
            Package nl = new Package();
            nl.setName("North Loop");
            nl.setDescription("North Loop Description ");
            nl.setPrice(200);
            nl.setSlots(20);
            nl.setFeatured(true);
            Instant start = Instant.parse("2024-05-20T00:00:00Z");
            nl.setStart(start);
            nl.setDuration(5);
            packageRepository.save(nl);
            return nl;
        });

        packageRepository.findByName("Iliria").map(o -> {
            log.info("Iliria Package is present in database");
            return o;
        }).orElseGet(() -> {
            Package iliria = new Package();
            iliria.setName("Iliria");
            iliria.setDescription("Iliria Package Description ");
            iliria.setPrice(500);
            iliria.setSlots(25);
            iliria.setFeatured(false);
            Instant start = Instant.parse("2024-05-20T00:00:00Z");
            iliria.setStart(start);
            iliria.setDuration(8);
            packageRepository.save(iliria);
            return iliria;
        });
    }

    public List<PackRead> getFeaturedUsers() {
        return packageRepository.getFeatured();
    }
}
