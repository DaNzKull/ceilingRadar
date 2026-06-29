import type { Aircraft } from "../types";

const trails = new Map<string, { lat: number; lon: number }[]>();
const MAX_POINTS = 100;

function deleteStaleTrails(currentIds: Set<string>): void {
  for (const icao of trails.keys()) {
    if (!currentIds.has(icao)) trails.delete(icao);
  }
}

export function recordPositions(planes: Aircraft[]): void {
  const currentIds = new Set(planes.map((p) => p.icao));
  deleteStaleTrails(currentIds);

  planes.forEach((plane) => {
    const trail = trails.get(plane.icao) ?? [];
    trail.push({ lat: plane.lat, lon: plane.lon });
    if (trail.length > MAX_POINTS) trail.shift();
    trails.set(plane.icao, trail);
  });
}

export function getTrail(icao: string): { lat: number; lon: number }[] {
  return trails.get(icao) ?? [];
}
