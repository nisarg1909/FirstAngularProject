import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  isVisible:boolean=true;
  studentName:string="";
  maths:number=0;
  science:number=0;
  english:number=0;
  studentList:any=[];

  showDiv(show:boolean):void{
    this.isVisible=show;
  }

  addStudent(student:any):void{
    console.log(student);
    this.studentList.push(student);
    console.log(this.studentList);
  }

}
