import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css'],
})
export class CityWeatherComponent {
  public readonly weatherData$: Observable<Weather | null> = this.weatherApiService.selectedCity$
    .pipe(
      switchMap(res => this.weatherApiService.getCityWeatherData(res)
        .pipe(
          catchError(err => of(null)),
        ),
      ),
    )

  constructor(private weatherApiService: WeatherApiService) {
  }
}
