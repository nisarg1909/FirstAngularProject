import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Child1Component} from '../child1/child1.component';
import {Child2Component} from '../child2/child2.component';
import {OneWayDataBindingComponent} from '../one-way-data-binding/one-way-data-binding.component';
import {TwoWayDataBindingComponent} from '../two-way-data-binding/two-way-data-binding.component';
import {ControlStatementComponent} from '../control-statement/control-statement.component';
import {TempleteDrivenFormComponent} from '../templete-driven-form/templete-driven-form.component';
import {ModelDrivenFormComponent} from '../model-driven-form/model-driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component, Child2Component, RouterLink, OneWayDataBindingComponent,TwoWayDataBindingComponent,ControlStatementComponent,TempleteDrivenFormComponent,ModelDrivenFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstAngularProject';
  name:string = "Nisarg Purohit";
  age:number = 30;
  phone:string="9657433912";
  no1:number=12;
  no2:number=8;
}
