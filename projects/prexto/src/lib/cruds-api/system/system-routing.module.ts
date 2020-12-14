import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system-list/system.component';
import {SystemFormComponent} from './system-form/system-form.component';


const routes: Routes = [
  { path: '', component: SystemComponent},
  { path: 'new', component: SystemFormComponent},
  { path: 'edit/:id', component: SystemFormComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
