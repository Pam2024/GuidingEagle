package com.guiding.eagle.api.repositories;

import com.guiding.eagle.api.dto.city.CityRead;
import com.guiding.eagle.api.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CityRepository extends JpaRepository<City, UUID> {
    Optional<City> findByName(String name);

    @Query(" from City ct ")
    List<CityRead> getAll();
}
