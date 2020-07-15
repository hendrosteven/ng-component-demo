import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoServiceService) {
   }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

}
