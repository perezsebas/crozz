import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://52.45.226.47/index.php/GPS/';
  apiHeaders = {
    'Accept': 'application/json',
    'Client-Service': 'frontend-client',
    'Auth-Key': 'GPS',
    'Authorization': ''
  };

  constructor(
    private http: Http
  ) { }

  getVehicles() {
    const url: string = this.apiUrl+'GPS';
    this.apiHeaders.Authorization = '';
    const headers = new Headers(this.apiHeaders);
    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, null, options);
  }

  getVehicleData(autho) {
    const url: string = this.apiUrl+'LatitudeLongitude';
    this.apiHeaders.Authorization = autho;
    const headers = new Headers(this.apiHeaders);
    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, null, options);
  }

}
