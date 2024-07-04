package com.guiding.eagle.api.repositories;

import com.guiding.eagle.api.dto.user.UserRead;
import com.guiding.eagle.api.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);

    @Query(value =  "from User u where u.featured = true")
    List<UserRead> getFeatured();

    Optional<User> findOneByEmailAndPassword(String email, String password);


    @Query("from User u where (:cityId is null or u.cityId = :cityId) and (:inDate is null or u.id not in (select gb.id from GuideBooking gb where gb.guideId = u.id and gb.bookedAt = :inDate))")
    List<UserRead> getList(@Param("cityId") String cityId, @Param("inDate")Instant inDate);
}
