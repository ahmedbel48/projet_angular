import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import type { TaskItem } from './task.model';

@Component({
  selector: 'app-task',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  tasks: TaskItem[] = [];

  addTask() {
    const newTask: TaskItem = {
      id: this.tasks.length + 1,
      title: 'Tâche ' + (this.tasks.length + 1),
      done: false,
      createdAt: new Date(),
    };
    this.tasks = [...this.tasks, newTask];
  }

  clearTasks() {
    this.tasks = [];
  }
}