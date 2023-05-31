import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Weather } from '../models/weather';
import { environment } from '../../../../environments/environment.development';

@Injectable()
export class WeatherApiService {
  public selectedCity$: Subject<string> = new Subject<string>();

  constructor(
    private _http: HttpClient,
  ) {
  }

  public getCityWeatherData(cityName: string): Observable<Weather> {
    let params = new HttpParams()
      .set('lang', 'ru')
      .set('units', 'metric')
      .set('q', cityName)
      .set('appid', environment.apiKey);

    return this._http.get<Weather>('/weather', {params})
  }
}
