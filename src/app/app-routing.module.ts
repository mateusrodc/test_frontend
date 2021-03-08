import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
import { ComputerIncludeComponent } from './computer-include/computer-include.component';
import { ComputerUpdateComponent } from './computer-update/computer-update.component';
import { ComputersComponent } from './computers/computers.component';

const routes: Routes = [
  {path: '', component: ComputersComponent, data: {title: 'Computer'}},
  {path: 'computers/:id', component: ComputerDetailComponent, data: {title: 'Computer Detail'}},
  {path: 'newcomputer',component: ComputerIncludeComponent, data: {title: 'Computer Include'}},
  {path: 'updatecomputer/:id', component: ComputerUpdateComponent, data: {title: 'Computer Update'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
