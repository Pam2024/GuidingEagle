package com.guiding.eagle.api.entities;

import jakarta.persistence.*;
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
@Table(name = "ge_guide_booking")
public class GuideBooking extends BaseEntity{

    @Column(name = "client_id")
    private String clientId;

    @Column(name = "guide_id")
    private String guideId;

    @Column(name = "city_id")
    private String cityId;

    @Column(name = "itinerary_id")
    private String itineraryId;

    @Column(name = "client_first_name")
    private String clientFirstName;

    @Column(name = "client_last_name")
    private String clientLastName;

    @Column(name = "client_phone_number")
    private long clientPhoneNumber;

    @Column(name = "client_email")
    private String clientEmail;

    @OneToOne
    @JoinColumn(name = "guide_id", insertable = false,updatable = false)
    private User guide;

    @OneToOne
    @JoinColumn(name = "city_id", insertable = false, updatable = false)
    private City city;

    @OneToOne
    @JoinColumn(name = "itinerary_id", insertable = false, updatable = false)
    private Itinerary itinerary;

    @Column(name = "price")
    private  double price;

    @Column(name = "booked_at")
    private Instant bookedAt;

}
