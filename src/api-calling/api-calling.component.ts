import {Component, inject} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-api-calling',
  standalone: true,
  imports: [],
  templateUrl: './api-calling.component.html',
  styleUrl: './api-calling.component.css'
})
export class ApiCallingComponent {


  apiService:ApiService= inject(ApiService);



}
