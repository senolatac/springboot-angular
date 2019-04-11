package com.sha.serverusermanagement.repository;

import com.sha.serverusermanagement.model.User;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    @Query("Select u.name from User u where u.id in (:pIdList)")
    List<String> findUserIdList(@Param("pIdList") List<Long> idList);

}
