import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  updateTodo(todo: Todo){
    todo.isDone = !todo.isDone;
    console.log(todo);
  }

  setClass(){

  }

}
