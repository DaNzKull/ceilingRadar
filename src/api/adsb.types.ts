export interface RawAircraft {
  hex: string;
  flight?: string;
  lat?: number;
  lon?: number;
  track?: number;
  alt_baro?: number | "ground";
  gs?: number;
  t?: string;
}

export interface AdsbResponse {
  ac?: RawAircraft[];
}
