package com.guiding.eagle.api.dto;

import java.time.Instant;

public interface PackRead {
    String getName();
    String getDescription();
    Double getPrice();
    Integer getSlots();
    Instant getStart();
    Integer getDuration();

}
