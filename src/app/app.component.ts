
import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="font-bold text-3xl">Vehicle Makes</h1>
    <ul>
      <li *ngFor="let make of vehicleMakes">{{ make.Make_Name }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  vehicleMakes: any[] = []; 

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getAllMakes().subscribe(
      (data: any) => {
        this.vehicleMakes = data.Results;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
