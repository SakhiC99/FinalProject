package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Librarymodel;

@Repository
public interface Libraryinterface  extends JpaRepository<Librarymodel,Integer>
 {

}