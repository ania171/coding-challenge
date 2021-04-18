import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Weather} from './weather.interfaces';
import {map} from 'rxjs/operators';

@Injectable()
export class WeatherService {

  private readonly apiKey = '776b88b7c6ba7de444e0ebb45786406b';

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getWeatherForCity(city: string): Observable<Weather> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`).pipe(
      map((data: any) => {
        return {
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          temp: data.main.temp,
          wind: data.wind.speed,
          city: data.name,
          coord: data.coord
        };
      })
    );
  }

  public getHourForecast(lon: number, lat: number): Observable<any> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,daily,minutely&units=metric&appid=${this.apiKey}`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
