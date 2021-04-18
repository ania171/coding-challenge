export interface Weather {
  icon: string;
  temp: number;
  wind: number;
  coord?: CityCoords;
  dt?: number;
}

export interface CityCoords {
  lon: number;
  lat: number;
}
