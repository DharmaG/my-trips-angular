import { Component, OnInit } from '@angular/core';

import { TripsApiService } from '../../services/trips-api.service';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips: any[] = [];

  constructor(
    private tripService: TripsApiService
  ) { }

  ngOnInit() {

    this.tripService.getTrips()
    .subscribe(
      (tripsFromApi: any[]) => {
        this.trips = tripsFromApi;
      }
    );
  }

}
