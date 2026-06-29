import type { Aircraft } from "../types";
import type { AdsbResponse, RawAircraft } from "./adsb.types";
import { ADSB_URL } from "../config";

export async function fetchAircraft(): Promise<Aircraft[]> {
  const response = await fetch(ADSB_URL);
  if (!response.ok) {
    console.warn(`ADSB fetch error: ${response.status}`);
    return [];
  }
  const data: AdsbResponse = await response.json();

  return (data.ac ?? [])
    .filter(
      (
        plane,
      ): plane is RawAircraft & {
        lat: number;
        lon: number;
        alt_baro: number;
      } =>
        plane.lat != null &&
        plane.lon != null &&
        typeof plane.alt_baro === "number",
    )
    .map((plane) => ({
      icao: plane.hex,
      flight: plane.flight?.trim(),
      lat: plane.lat,
      lon: plane.lon,
      track: plane.track,
      altitude: plane.alt_baro,
      groundSpeed: plane.gs ?? 0,
      aircraftType: plane.t,
      category: plane.category,
    }));
}
