import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './one-way-data-binding.component.html',
  styleUrl: './one-way-data-binding.component.css'
})
export class OneWayDataBindingComponent {

  studentName:string="Viren";
  studentCourse:string="Java";
  studentFees:number=34444;
  studentDiscount:number=2000;
  isDisabled:boolean=false;
  type:string="date";
  style:string="background-color:yellow";
  msg:string="this is a difference between string interpolation and property binding";

  greet(param:string){
    //alert("Hello World!");
    alert("Hello! Good Morning "+param)
  }

  calculateFees(param:number):void{
    this.studentDiscount=param;
  }

  objectPassingFunction(param: HTMLInputElement){
    param.style.backgroundColor="";
    if(Number(param.value)>=0){
      this.studentDiscount= Number(param.value);
    }
    else {
      param.style.backgroundColor="red";
    }
  }

}
