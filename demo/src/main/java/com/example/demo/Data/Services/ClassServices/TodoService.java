package com.example.demo.data.services.classservices;
import org.springframework.stereotype.Service;
import com.example.demo.data.models.TodoItem;
import com.example.demo.data.services.GenericServiceImpl;
import com.example.demo.data.repositories.TodoRepository;

@Service

public class TodoService extends GenericServiceImpl<TodoItem, Long> {
    public TodoService(TodoRepository todoRepository) {
        super(todoRepository);
    }
}










