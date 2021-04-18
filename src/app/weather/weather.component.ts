import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { WeatherService } from './weather.service';
import { Weather } from './weather.interfaces';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {

  @Input() public city: string;

  public weather: Weather;

  constructor(
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherService.getWeatherForCity(this.city)
      .pipe(take(1))
      .subscribe((weatherData: Weather) => {
        this.weather = weatherData;
        this.weatherService.getHourForecast(this.weather.coord.lon, this.weather.coord.lat)
          .pipe(take(1))
          .subscribe((forecastData) => {
            console.log('forecastData', forecastData);
          });
      });
  }
}
