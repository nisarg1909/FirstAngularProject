import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './model-driven-form.component.html',
  styleUrl: './model-driven-form.component.css'
})
export class ModelDrivenFormComponent {

  employeeList:any=[];

  employeeForm: FormGroup = new FormGroup({
    name:new FormControl("", [Validators.required]),
    salary: new FormControl("", [Validators.required]),
    birthDate: new FormControl("", [Validators.required]),
    status: new FormControl(""),
    gender: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required])
  })


  addEmployee() {
    console.log(this.employeeForm.value);
    this.employeeList.push(this.employeeForm.value);
    this.employeeForm.reset();
  }
}
