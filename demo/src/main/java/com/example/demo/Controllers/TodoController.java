package com.example.demo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        todo.setId(null);
        return todoService.save(todo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        todoService.delete(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody TodoItem todo) {
        if (todo.getId() == null || !id.equals(todo.getId())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("ID in path and request body must match");
        }

        TodoItem updated = todoService.save(todo);
        return ResponseEntity.ok(updated);
    }
}