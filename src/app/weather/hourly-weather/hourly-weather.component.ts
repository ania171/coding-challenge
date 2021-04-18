import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { Weather} from '../weather.interfaces';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
})
export class HourlyWeatherComponent implements OnInit{
  public city: string;
  public forecast: Weather[];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  public ngOnInit(): void {
    this.checkCity();
    this.weatherService.getCityGeolocacion(this.city).subscribe(coords => {
      this.weatherService.getHourForecast(coords.lon, coords.lat)
        .pipe(take(1))
        .subscribe(forecast => {
          this.forecast = forecast;
        });
    });
  }

  public checkCity(): void {
    this.city = this.route.snapshot.paramMap.get('city');
  }
}
