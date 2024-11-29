import { Component } from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-templete-driven-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './templete-driven-form.component.html',
  styleUrl: './templete-driven-form.component.css'
})
export class TempleteDrivenFormComponent {

  employeeList:any=[];

  addEmployee(EmployeeForm: NgForm) {
    console.log(EmployeeForm.value);
    if (EmployeeForm.value.salary>0) {
      this.employeeList.push(EmployeeForm.value);
    }
    else {
      alert("Salary  should be greater than 0");
    }
    console.log(this.employeeList);
  }
}
