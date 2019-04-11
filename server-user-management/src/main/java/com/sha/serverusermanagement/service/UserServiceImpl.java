package com.sha.serverusermanagement.service;

import com.sha.serverusermanagement.model.User;
import com.sha.serverusermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

//Solid + Dependency Inversion
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User save(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return user;
    }

    @Override
    public User findByUsername(String username){
        return userRepository.findByUsername(username).orElse(null);
    }

    @Override
    public List<String> findUsers(List<Long> idList){
        return this.userRepository.findUserIdList(idList);
    }

    @Override
    public List<User> findAllUsers(){
        return this.userRepository.findAll();
    }
}
