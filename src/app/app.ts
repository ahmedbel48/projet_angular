import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { Header } from '../header/header';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  imports: [HomePage, AboutPage, Header, Task],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}