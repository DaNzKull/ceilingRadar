import type { AircraftType } from "../types";
import type { AdsbdbAircraftResponse } from "./aircraftInfo.types";
import { ADSBDB_BASE } from "../config";

async function fetchAircraftInfo(hex: string): Promise<AircraftType | null> {
  const response = await fetch(`${ADSBDB_BASE}/aircraft/${hex}`);
  if (!response.ok) return null;

  const data: AdsbdbAircraftResponse = await response.json();
  const ac = data.response?.aircraft;

  if (!ac?.manufacturer || !ac?.type) return null;
  return { manufacturer: ac.manufacturer, model: ac.type };
}

const cache = new Map<string, AircraftType | null>();

export function getAircraftType(hex: string): AircraftType | null {
  if (cache.has(hex)) return cache.get(hex) ?? null;

  cache.set(hex, null);
  fetchAircraftInfo(hex)
    .then((info) => cache.set(hex, info))
    .catch(() => cache.delete(hex));

  return null;
}
