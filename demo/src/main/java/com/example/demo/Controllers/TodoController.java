package com.example.demo.controllers;

import org.springframework.web.bind.annotation.*;

import com.example.demo.data.models.TodoItem;
import com.example.demo.data.services.classservices.TodoService;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<TodoItem> getAll() {
        return todoService.getAll();
    }

    @PostMapping
    public TodoItem save(@RequestBody TodoItem todo) {
        return todoService.save(todo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        todoService.delete(id);
    }
}
