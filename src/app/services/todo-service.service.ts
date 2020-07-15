import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos: Todo[];

  constructor() { 
    this.todos = [
      {
        name: 'Todo Satu',
        isDone: false
      },
      {
        name: 'Todo Dua',
        isDone: false
      },
      {
        name: 'Todo Tiga',
        isDone: false
      },
      {
        name: 'Todo Empat',
        isDone: false
      },
    ];
  }

  getTodos(){
    return this.todos;
  }

  addTodo(_name: string){
    this.todos.push({
      name: _name,
      isDone: false,
    });
  }
}
