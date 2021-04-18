import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import { HourlyWeatherGuard } from './hourly-weather/hourly-weather.guard';

@NgModule({
  declarations: [
    WeatherComponent,
    HourlyWeatherComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [WeatherComponent],
  providers: [WeatherService, HourlyWeatherGuard],
})
export class WeatherModule {}
