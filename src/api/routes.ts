import type { Route } from "../types";
import type { AdsbdbResponse } from "./routes.types";
import { ADSBDB_BASE } from "../config";

export async function fetchRoute(callsign: string): Promise<Route | null> {
  const response = await fetch(`${ADSBDB_BASE}/callsign/${callsign}`);
  if (!response.ok) return null;

  const data: AdsbdbResponse = await response.json();
  const fr = data.response?.flightroute;

  const origin = fr?.origin?.municipality ?? fr?.origin?.iata_code;
  const destination =
    fr?.destination?.municipality ?? fr?.destination?.iata_code;
  const airline = fr?.airline?.name;
  if (!origin || !destination) return null;

  return {
    origin: origin,
    destination,
    airline,
  };
}

const cache = new Map<string, Route | null>();
export function getRoute(callsign: string): Route | null {
  if (cache.has(callsign)) {
    return cache.get(callsign) ?? null;
  }

  cache.set(callsign, null);
  fetchRoute(callsign)
    .then((route) => cache.set(callsign, route))
    .catch(() => {});

  return null;
}
