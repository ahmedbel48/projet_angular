import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'Task Manager';
  comdelete = false;

  rename() {
    this.title = 'mes taches';
  }
}