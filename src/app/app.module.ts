import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { TripsApiService } from './services/trips-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { TripsComponent } from './pages/trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TripsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
