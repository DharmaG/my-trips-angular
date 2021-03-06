import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { TripsApiService } from './services/trips-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { TripsComponent } from './pages/trips/trips.component';
import { TripFormComponent } from './pages/trip-form/trip-form.component';
import { ScrollspyComponent } from './pages/scrollspy/scrollspy.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TripsComponent,
    TripFormComponent,
    ScrollspyComponent
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
