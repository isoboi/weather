import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import {RouterModule, Routes} from "@angular/router";
import { CityListComponent } from './components/city-list/city-list.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import {FormsModule} from "@angular/forms";
import {WeatherApiService} from "./services/weather-api.service";

const routes: Routes = [
  {
    path:'',
    component: WeatherComponent
  }
]

@NgModule({
  declarations: [
    WeatherComponent,
    CityListComponent,
    CityWeatherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers:[
    WeatherApiService
  ]
})
export class WeatherModule { }
