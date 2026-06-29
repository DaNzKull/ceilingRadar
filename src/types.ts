export interface Aircraft {
  icao: string;
  flight?: string;
  lat: number;
  lon: number;
  track?: number;
  aircraftType?: string;
  altitude: number;
  groundSpeed: number;
  category?: string;
}

export interface AircraftType {
  manufacturer: string;
  model: string;
}

export type AircraftIconType = "jet" | "helicopter" | "prop";

export interface Route {
  origin?: string;
  destination?: string;
  airline?: string;
}
