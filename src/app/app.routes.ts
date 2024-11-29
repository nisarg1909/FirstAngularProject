import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {ContactusComponent} from '../contactus/contactus.component';
import {OneWayDataBindingComponent} from '../one-way-data-binding/one-way-data-binding.component';
import {TwoWayDataBindingComponent} from '../two-way-data-binding/two-way-data-binding.component';
import {ControlStatementComponent} from '../control-statement/control-statement.component';
import {TempleteDrivenFormComponent} from '../templete-driven-form/templete-driven-form.component';
import {ModelDrivenFormComponent} from '../model-driven-form/model-driven-form.component';
import {EmployeeEntryComponent} from '../employee-entry/employee-entry.component';
import {EmployeeViewComponent} from '../employee-view/employee-view.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'oneway', component:OneWayDataBindingComponent},
  {path:'twoway', component:TwoWayDataBindingComponent},
  {path:'control', component:ControlStatementComponent},
  {path:'tdf', component:TempleteDrivenFormComponent},
  {path:'mdf', component:ModelDrivenFormComponent},
  {path:'entry', component:EmployeeEntryComponent},
  {path:'view', component:EmployeeViewComponent}
];
