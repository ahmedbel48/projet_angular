import { Component, signal, computed } from '@angular/core';
import type { TaskItem } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  tasks = signal<TaskItem[]>([]);
  newTitle = signal('');
  count = computed(() => this.tasks().length);

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newTitle.set(input.value);
  }

  add() {
    const title = this.newTitle().trim();
    if (title === '') {
      return;
    }

    const newTask: TaskItem = {
      id: Date.now(),
      title: title,
      done: false,
      createdAt: new Date(),
    };

    this.tasks.update(items => [...items, newTask]);
    this.newTitle.set('');
  }

  clear() {
    this.tasks.set([]);
  }
}