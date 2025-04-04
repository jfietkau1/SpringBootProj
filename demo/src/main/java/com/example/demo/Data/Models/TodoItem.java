package com.example.demo.data.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data // Generates getters, setters, toString, equals, and hashCode
@NoArgsConstructor // Creates the empty constructor
@AllArgsConstructor // Creates a constructor with all fields
public class TodoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private boolean isDone;
}