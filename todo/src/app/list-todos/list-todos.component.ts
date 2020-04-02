import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:  Todo[]
  // = [
  //   new Todo(1,'Learn Something', false, new Date()),
  //   new Todo(2,'Visit Japan', false, new Date()),
  //   new Todo(3,'Start Gym', true, new Date())
  // ]

  constructor(
    private service: TodoDataService
  ) { }

  ngOnInit() {
    this.service.retrieveAllTodos('vibhu').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
