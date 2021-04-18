import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';

@NgModule({
  declarations: [
    WeatherComponent,
    HourlyWeatherComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [WeatherComponent],
  providers: [WeatherService],
})
export class WeatherModule {}
