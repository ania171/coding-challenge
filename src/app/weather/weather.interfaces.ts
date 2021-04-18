export interface Weather {
  icon: string;
  temp: number;
  wind: number;
  city: string;
  coord: CityGeolocation;
}

export interface CityGeolocation {
  lon: number;
  lat: number;
}
