import { Component } from '@angular/core';
import {Child1Component} from '../child1/child1.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    Child1Component
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
