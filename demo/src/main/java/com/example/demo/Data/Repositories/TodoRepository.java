package com.example.demo.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.data.models.TodoItem;

@Repository
public interface  TodoRepository extends JpaRepository<TodoItem, Long> {
    
}
