import { Component, Input } from '@angular/core';
import { type Task } from './task.model'; // type keyword not required but for the sake of clarity that its a type not a component

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

}
