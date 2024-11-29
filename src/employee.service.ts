import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  private employeeList:any[]=[];

  public saveEmployee(employee:any):void{
    this.employeeList.push(employee);
  }

  public getEmployee(){
    return this.employeeList;
  }

}
