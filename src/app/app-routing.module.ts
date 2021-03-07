import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
import { ComputersComponent } from './computers/computers.component';

const routes: Routes = [
  {path: '', component: ComputersComponent, data: {title: 'Computer'}},
  {path: 'computers/:id', component: ComputerDetailComponent, data: {title: 'Computer Detail'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
