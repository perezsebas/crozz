import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opened: boolean = false;
  title: string;
  vehicles: any;
  vehicleChosen: any = false;
  data: any;
  markerPosition: boolean = false;
  zoom: number = 11;
  zIndex: number = 1000;
  iconUrl: string = './assets/car.png';
  current: {};
  origin: {};
  destination: {};

  constructor(
    private ApiService: ApiService
  ) { }

  ngOnInit() {
    this.getListVehicles();
  }

  getListVehicles() {
    this.ApiService.getVehicles()
      .subscribe(res => {
        this.vehicles = res.json();
      });
  }

  getVehicleData() {
    this.ApiService.getVehicleData(this.vehicleChosen.Authorization)
      .subscribe(res => {
        this.data = res.json();
        this.origin = { lat: +this.data.start.lat, lng: +this.data.start.lng };
        this.destination = { lat: +this.data.end.lat, lng: +this.data.end.lng };
        this.current = { lat: +this.data.current.lat, lng: +this.data.current.lng };
        this.markerPosition = true;
      });
  }

  placeMarker(i) {
    this.vehicleChosen = this.vehicles[i];
    this.title = this.vehicleChosen.placa;
    this.markerPosition = false;
    this.getVehicleData();
    this.closeSidebar();
  }

  openSidebar() {
    this.opened = true;
  }

  closeSidebar() {
    this.opened = false;
  }

}
