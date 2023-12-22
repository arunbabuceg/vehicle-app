import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';

  constructor(private http: HttpClient) {}

  getAllMakes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
