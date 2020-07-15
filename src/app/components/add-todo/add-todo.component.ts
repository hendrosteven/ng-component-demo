import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  name: string;

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

  onSaveTodo(){
    this.todoService.addTodo(this.name);
    this.name='';
  }
}
