import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../models/todo-item.model';
import { CommonModule } from '@angular/common';
import { TodoService as RealTodoService } from '../services/todo.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

console.log(RealTodoService);

@Component({
  selector: 'app-todo-list',
  standalone:true, 
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{


  todos: TodoItem[] = [];
  todoForm: TodoItem = { id: 0, title: '', done: false };
  showModal = false;
  isEditing = false;
  todoToDelete: TodoItem | null = null;
  showDeleteModal: boolean = false;



  constructor(private todoService: TodoService) {}

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


  editTodo(todo: TodoItem): void {
    this.todoForm = { ...todo }; // shallow copy
    this.isEditing = true;
    this.showModal = true;
  }

  deleteTodo(id: number): void {
    this.todoService.delete(id).subscribe(() => this.loadTodos());
  }

  submitForm(): void {
    if (this.todoForm.id > 0) {
      this.todoService.update(this.todoForm.id, this.todoForm).subscribe(() => {
        this.closeModal();
        this.loadTodos();
      });
    } else {
      this.todoService.save(this.todoForm).subscribe(() => {
        this.closeModal();
        this.loadTodos();
      });
    }
  }
  

  openModal(): void {
    this.todoForm = { id: 0, title: '', done: false };
    this.isEditing = false;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }


  confirmDelete(todo: TodoItem): void {
    this.todoToDelete = todo;
    this.showDeleteModal = true;
  }
  
  deleteConfirmed(): void {
    if (this.todoToDelete) {
      this.todoService.delete(this.todoToDelete.id).subscribe(() => {
        this.loadTodos();
        this.closeDeleteModal();
      });
    }
  }
  
  closeDeleteModal(): void {
    this.todoToDelete = null;
    this.showDeleteModal = false;
  }

  get isAnyModalOpen(): boolean {
    return this.showModal || this.showDeleteModal;
  }
  

}
