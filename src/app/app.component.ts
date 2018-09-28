import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opened: boolean = false;
  title: string = 'Crozz Routes';
  vehicles: any = [
    {
      plate: 'ABC124',
      lat: 6.280011,
      lng: -75.442734,
      chosen: true
    },
    {
      plate: 'GTS567',
      lat: 6.023513,
      lng: -75.121733,
      chosen: false
    },
    {
      plate: 'FRD345',
      lat: 5.841655,
      lng: -74.595009,
      chosen: false
    },
    {
      plate: 'MDR038',
      lat: 5.375395,
      lng: -74.586256,
      chosen: false
    }
  ];
  // vehicleChosen: any = this.vehicles[0];
  vehicleChosen: any = false;
  position: boolean = false;
  lat: number;
  lng: number;
  zoom: number = 11;
  origin: {};
  destination: {};

  vehicle: any;

  constructor(
    private ApiService: ApiService
  ) { }

  ngOnInit() {
    // this.getDirection();
    // this.placeMarker(0);

    this.getApi();
  }

  getApi() {

    this.ApiService.getVehicles()
      .subscribe(res => {
        this.vehicle = res.json();
        console.log(`Start Lat: ${this.vehicle.start.lat}`);
        console.log(`End Lng: ${this.vehicle.end.lng}`);
      });

  }

  getDirection() {
    this.origin = { lat: 6.25184, lng: -75.56359 }
    this.destination = { lat: 4.624335, lng: -74.063644 }
  }

  placeMarker(i) {
    this.getDirection();
    this.vehicleChosen = this.vehicles[i];
    this.lat = this.vehicleChosen.lat;
    this.lng = this.vehicleChosen.lng;
    this.position = true;
    this.closeSidebar();
  }

  openSidebar() {
    this.opened = true;
  }

  closeSidebar() {
    this.opened = false;
  }

}
