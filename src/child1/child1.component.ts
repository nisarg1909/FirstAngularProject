import { Component } from '@angular/core';
import {Child2Component} from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [
    Child2Component
  ],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  username:string="viren@gmail.com";
  designation:string="Manager";
}
