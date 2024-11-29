import { Component } from '@angular/core';
import {Child1Component} from '../child1/child1.component';
import {Child2Component} from '../child2/child2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Child1Component,
    Child2Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
