import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataArrivalStatusAnimationComponent } from './data-arrival-status-animation/data-arrival-status-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    DataArrivalStatusAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
