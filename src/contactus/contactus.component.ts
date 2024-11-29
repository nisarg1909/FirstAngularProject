import { Component } from '@angular/core';
import {Child2Component} from '../child2/child2.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [
    Child2Component
  ],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
