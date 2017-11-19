import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TripInfo } from '../../interfaces/trip-info';
import { TripsApiService } from '../../services/trips-api.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

  newTrip: any = {};


  @Output() newTrips = new EventEmitter();

  constructor(
    private tripService: TripsApiService
  ) { }

  ngOnInit() {
  }

  saveNewTrip() {
    this.tripService.postTrip(this.newTrip)
    .subscribe(
      (trip) => {
        this.newTrip.push(trip)
      }
    );
  }

}
