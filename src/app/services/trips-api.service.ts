import { Injectable } from '@angular/core';

import  { HttpClient } from '@angular/common/http';

import { TripInfo } from '../interfaces/trip-info';
import { environment } from '../../environments/environment';

@Injectable()
export class TripsApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http : HttpClient
  ) { }

  getTrips() {
    return this.http.get(
      this.baseUrl + '/api/trips'
    );
  }

  postTrip(tripFields: TripInfo) {
    return this.http.post(
      this.baseUrl + '/api/trips',
      tripFields,
      { withCredentials:true }
    );
  }

  deleteTrip(tripId: string) {
    return this.http.delete(
      this.baseUrl + '/api/trips/' + tripId,
      { withCredentials: true }
    );
  }

}
