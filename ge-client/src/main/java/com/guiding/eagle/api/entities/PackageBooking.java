package com.guiding.eagle.api.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ge_package_booking")
public class PackageBooking extends BaseEntity{

    @Column(name = "client_id")
    private String clientId;

    @Column(name = "client_first_name")
    private String clientFirstName;

    @Column(name = "client_last_name")
    private String clientLastName;

    @Column(name = "client_phone_number")
    private long clientPhoneNumber;

    @Column(name = "client_email")
    private String clientEmail;

    @Column(name = "total_price")
    private double totalPrice;

    @Column(name = "number_of_persons")
    private int numberOfPersons;

    @Column(name = "trip_id")
    private String tripId;

    @ManyToOne
    @JoinColumn(name = "trip_id", insertable = false, updatable = false)
    private Package trip;

}
