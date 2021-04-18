export interface Weather {
  icon: string;
  temp: number;
  wind: number;
  coord?: CityGeolocation;
  dt?: number;
}

export interface CityGeolocation {
  lon: number;
  lat: number;
}
