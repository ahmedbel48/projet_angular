import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);

  double = computed(() => this.count() * 2);
  isEven = computed(() => this.count() % 2 === 0);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  setToTen() {
    this.count.set(10);
  }

  reset() {
    this.count.set(0);
  }
}