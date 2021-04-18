import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [WeatherComponent],
  providers: [WeatherService],
})
export class WeatherModule {}
