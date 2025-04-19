import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../models/todo-item.model';
import { CommonModule } from '@angular/common';
import { TodoService as RealTodoService } from '../services/todo.service';
import { RouterModule } from '@angular/router';

console.log(RealTodoService);

@Component({
  selector: 'app-todo-list',
  standalone:true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{


  todos: TodoItem[] = [];

  constructor(private todoService: TodoService) {
    console.log(this.todoService);
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getAll().subscribe({
      next: (data: TodoItem[]) => {
        console.log('Loaded todos:', data);
        this.todos = data;
      },
      error: err => {
        console.error('Error loading todos:', err);
      }
    });
  }
}
