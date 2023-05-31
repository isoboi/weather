import { Component } from '@angular/core';
import { City } from '../../models/city';
import { WeatherApiService } from '../../services/weather-api.service';
import { StorageService } from '../../../../shared/services/storage.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  public cityList: Array<City> = [];
  public inputValue = '';
  public selectedCityIndex: number | null = null;

  constructor(
    private _weatherApiService: WeatherApiService,
    private _storageService: StorageService,
  ) {
    this.cityList = this._storageService.getItem(this._storageService.cityListKey) || []
  }

  public addNewCity(): void {
    const cityName = this.inputValue.trim();

    if (cityName.length === 0) {
      return;
    }

    this.cityList.push({
      name: cityName,
    });

    this._storageService.setItem(this._storageService.cityListKey, this.cityList);
    this.onCitySelect(cityName, this.cityList.length - 1);
    this.inputValue = '';
  }

  public onCitySelect(cityName: string, index: number): void {
    this.selectedCityIndex = index;
    this._weatherApiService.selectedCity$.next(cityName);
  }
}
