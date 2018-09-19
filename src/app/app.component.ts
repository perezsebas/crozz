import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opened: boolean = false;
  title: string = 'Crozz Routes';
  plate: string = 'ABC123';
  position: boolean = false;
  lat: number;
  lng: number;
  zoom: number = 11;
  origin: {};
  destination: {};

  constructor() { }

  ngOnInit() {
    this.getDirection();
    this.placeMarker();
  }

  getDirection() {
    this.origin = { lat: 6.25184, lng: -75.56359 }
    this.destination = { lat: 4.624335, lng: -74.063644 }
  }

  placeMarker() {
    this.lat = 6.280011;
    this.lng = -75.442734;
    this.position = true;
  }

  openSidebar() {
    this.opened = true;
  }

  closeSidebar() {
    this.opened = false;
  }

}
