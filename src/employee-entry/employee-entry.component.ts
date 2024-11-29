import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-entry',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './employee-entry.component.html',
  styleUrl: './employee-entry.component.css'
})

export class EmployeeEntryComponent {

  constructor(private employeeService: EmployeeService) { }
  //employeeService:EmployeeService = Inject("EmployeeService");

  EmployeeForm: FormGroup = new FormGroup({
    id: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    salary: new FormControl("")
  });

  addEmployee() {
    console.log(this.EmployeeForm.value);
    this.employeeService.saveEmployee(this.EmployeeForm.value);
  }

}
