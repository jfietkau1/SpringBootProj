package com.example.demo.Data.Services.ClassServices;
import org.springframework.stereotype.Service;
import com.example.demo.data.repository.todoRepository;



@Service

public class TodoService extends GenericServiceImpl<TodoItem, Long> {
    public TodoService(TodoRepository todoRepository) {
        super(todoRepository);
    }
}
