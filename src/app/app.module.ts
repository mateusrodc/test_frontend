import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputersComponent } from './computers/computers.component';
import { HttpClientModule } from '@angular/common/http';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
import { ComputerIncludeComponent } from './computer-include/computer-include.component';
import { ComputerUpdateComponent } from './computer-update/computer-update.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    ComputerDetailComponent,
    ComputerIncludeComponent,
    ComputerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
