import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AboutComponent } from './about/about.component';



export const routes: Routes = [
    { path: 'todos', component: TodoListComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
  ];





