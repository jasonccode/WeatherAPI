// weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string = 'Bogotá'): Observable<WeatherData> {
    // Construye la URL completa concatenando la URL base con la ruta específica
    const url = `${environment.weatherApiBaseUrl}/current.json`;

    const headers = new HttpHeaders()
      .set(
        environment.xRapidAPIKeyHeaderName,
        environment.xRapidAPIKeyHeaderValue
      )
      .set(
        environment.xRapidAPIHostHeaderName,
        environment.xRapidAPIHostHeaderValue
      );

    const params = new HttpParams()
      .set('q', `${cityName}`)
      .set('units', 'metric');

    return this.http.get<WeatherData>(url, { headers, params });
  }
}
