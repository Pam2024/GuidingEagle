package com.guiding.eagle.api.dto.user;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter @Setter
public class UserFilter {
    private String cityId;
    private Instant date;
}
