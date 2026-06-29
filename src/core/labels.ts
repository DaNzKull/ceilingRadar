import type { Aircraft } from "../types";
import { toScreen } from "../geo/projection";

export function getCompactIcaos(
  planes: Aircraft[],
  width: number,
  height: number,
): Set<string> {
  const withPositions = planes.map((plane) => ({
    plane,
    ...toScreen(plane.lat, plane.lon, width, height),
  }));

  return new Set(
    withPositions
      .filter(({ plane, x, y }) =>
        withPositions.some((other) => {
          if (other.plane === plane) return false;
          const dx = x - other.x;
          const dy = y - other.y;
          return Math.sqrt(dx ** 2 + dy ** 2) < 150;
        }),
      )
      .map(({ plane }) => plane.icao),
  );
}
