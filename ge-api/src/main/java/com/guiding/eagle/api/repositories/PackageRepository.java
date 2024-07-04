package com.guiding.eagle.api.repositories;

import com.guiding.eagle.api.dto.PackRead;
import com.guiding.eagle.api.dto.user.UserRead;
import com.guiding.eagle.api.entities.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PackageRepository extends JpaRepository<Package, UUID>{
    Optional<Package> findByName(String name);

    @Query(" from Package pck ")
    List<PackRead> getAll();

    @Query(value =  "from Package p where p.featured = true")
    List<PackRead> getFeatured();
}
