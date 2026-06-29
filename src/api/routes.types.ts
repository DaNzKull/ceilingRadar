interface RawAirport {
  iata_code?: string;
  municipality?: string;
}

interface RawFlightroute {
  airline?: { name?: string };
  origin?: RawAirport;
  destination?: RawAirport;
}

export interface AdsbdbResponse {
  response?: { flightroute?: RawFlightroute };
}
