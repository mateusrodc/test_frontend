import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputersComponent } from './computers/computers.component';
import { HttpClientModule } from '@angular/common/http';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    ComputerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
