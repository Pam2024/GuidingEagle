package com.guiding.eagle.api.services;

import com.guiding.eagle.api.dto.user.UserFilter;
import com.guiding.eagle.api.dto.user.UserLogin;
import com.guiding.eagle.api.dto.user.UserRead;
import com.guiding.eagle.api.dto.user.UserRegister;
import com.guiding.eagle.api.entities.City;
import com.guiding.eagle.api.entities.User;
import com.guiding.eagle.api.enums.UserRole;
import com.guiding.eagle.api.repositories.CityRepository;
import com.guiding.eagle.api.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import response.LoginResponse;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final CityRepository cityRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${user.image_url}")
    String imagePath;

    public void initData() {
        Optional<City> tirana = cityRepository.findByName("Tirana");
        Optional<City> durres = cityRepository.findByName("Durres");

        User first = new User();
        first.setFirstName("John");
        first.setLastName("Blake");
        first.setFeatured(true);
        first.setImageName("first.png");
        first.setImagePath(imagePath);
        first.setPhone("+35500000000");
        first.setEmail("blake@gmail.com");
        first.setRole(UserRole.GUIDE);
        first.setCityId(tirana.map(city -> city.getId().toString()).orElse(null));

        // TODO: To be set one when spring security is integrated
        // first.setPassword("");

        /* Optional<User> dbUser = userRepository.findByEmail(first.getEmail());

        if (dbUser.isEmpty())
            userRepository.save(first);*/

        userRepository.findByEmail(first.getEmail()).orElseGet(() -> userRepository.save(first));

        User second = new User();
        second.setFirstName("Ana");
        second.setLastName("West");
        second.setEmail("ana@gmail.com");
        second.setPhone("+35500000000");
        second.setRole(UserRole.GUIDE);
        second.setImageName("second.png");
        second.setImagePath(imagePath);
        second.setFeatured(true);
        second.setCityId(tirana.map(city -> city.getId().toString()).orElse(null));
        userRepository.findByEmail(second.getEmail()).orElseGet(() -> userRepository.save(second));

        User third = new User();
        third.setFirstName("Sonia");
        third.setLastName("Brown");
        third.setFeatured(true);
        third.setPhone("+35500000000");
        third.setImageName("third.png");
        third.setImagePath(imagePath);
        third.setEmail("sonia@gmail.com");
        third.setRole(UserRole.GUIDE);
        third.setCityId(durres.map(city -> city.getId().toString()).orElse(null));
        userRepository.findByEmail(third.getEmail()).orElseGet(() -> userRepository.save(third));

        User fourth = new User();
        fourth.setFirstName("Michael");
        fourth.setLastName("Jackson");
        fourth.setPhone("+35500000000");
        fourth.setFeatured(false);
        fourth.setEmail("michael@gmail.com");
        fourth.setRole(UserRole.GUIDE);
        fourth.setImageName("fourth.png");
        fourth.setImagePath(imagePath);
        fourth.setCityId(durres.map(city -> city.getId().toString()).orElse(null));
        userRepository.findByEmail(fourth.getEmail()).orElseGet(() -> userRepository.save(fourth));
    }

    public List<UserRead> getFeaturedUsers() {
        return userRepository.getFeatured();
    }

    public User saveUser(UserRegister userRegister) {
        User user=new User(
                userRegister.getFirstName(),
                userRegister.getLastName(),
                userRegister.getUsername(),
                userRegister.getPassword()
        );
        return userRepository.save(user);
    }

    public LoginResponse loginUser(UserLogin userLogin){
        String msg="";
        Optional<User> user1=userRepository.findByEmail(userLogin.getEmail());
        if (user1 != null){
            String password=userLogin.getPassword();
            String encodedPassword=user1.get().getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if(isPwdRight){
                Optional<User> user =userRepository.findOneByEmailAndPassword(userLogin.getEmail(), userLogin.getPassword());
                if (user.isPresent()){
                    return new LoginResponse("Login success", true);
                }else {
                    return new LoginResponse("Login failed", false);
                }
            }else {
                return new LoginResponse("Incorrect password", false);
            }
        }else{
            return new LoginResponse("Email not registered", false);
    }

    }


    public List<UserRead> getList(UserFilter request) {
        String cityId = request != null && request.getCityId() != null && !request.getCityId().isBlank() ? request.getCityId() : null;
        Instant inDate = request != null ? request.getDate() : null;
        return userRepository.getList(cityId, inDate);
    }
}
