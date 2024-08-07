package com.guiding.eagle.api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ge_itinerary")
public class Itinerary extends BaseEntity {
    private String name;
    private String description;
    private double duration;
}
