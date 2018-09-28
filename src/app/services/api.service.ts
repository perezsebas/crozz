import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: Http
  ) { }

  getVehicles() {
    const apiUrl: string = 'http://52.15.132.134/TCP/index.php/GPS/LatitudeLongitude';
    const headers = new Headers({
      // 'Content-Type':  'application/json',
      'Accept': 'application/json',
      'Client-Service': 'frontend-client',
      'Auth-Key': 'GPS',
      'Authorization': '$1$rasmusle$75LARkFZVzcpCIh9Lqu78/'
    });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(apiUrl, null, options);
  }
}
