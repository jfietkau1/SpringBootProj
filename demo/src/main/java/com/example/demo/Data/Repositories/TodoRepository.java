package com.example.demo.Data.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Data.Models.TodoItem;

@Repository
public interface  TodoRepository extends JpaRepository<TodoItem, Long> {
    
}
