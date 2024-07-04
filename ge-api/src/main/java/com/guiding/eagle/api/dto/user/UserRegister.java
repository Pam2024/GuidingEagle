package com.guiding.eagle.api.dto.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegister {
    protected String firstName;
    protected String lastName;
    protected String username;
    protected String password;
    protected String repeatPassword;
}
