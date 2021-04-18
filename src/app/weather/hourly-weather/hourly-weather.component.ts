import { Component, Input } from '@angular/core';

import { Weather } from '../weather.interfaces';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
})
export class HourlyWeatherComponent {
  @Input() public city: string;
  @Input() public forecast: Weather[];

}
