import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from "../../Task"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./task.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
   this.tasks = this.TaskService.getTasks();
  }

}
