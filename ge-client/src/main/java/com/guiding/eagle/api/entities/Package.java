package com.guiding.eagle.api.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ge_package")
public class Package extends BaseEntity {
    private String name;

    private String description;

    private double price;

    @Column(name = "image_name")
    private String imageName;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "slots")
    private int slots;

    @Column(name = "start")
    private Instant start;

    @Column(name = "duration")
    private int duration;

    @Column(name = "featured")
    private boolean featured;
}
