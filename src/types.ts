export interface Aircraft {
  icao: string;
  flight?: string;
  lat: number;
  lon: number;
  track?: number;
  aircraftType?: string;
  altitude: number;
  groundSpeed: number;
}

export interface AircraftType {
  manufacturer: string;
  model: string;
}

export interface Route {
  origin?: string;
  destination?: string;
  airline?: string;
}
