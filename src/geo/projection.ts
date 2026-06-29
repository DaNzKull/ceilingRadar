import { config } from "../config";

export function toScreen(
  lat: number,
  lon: number,
  width: number,
  height: number,
): { x: number; y: number } {
  const NM_PER_DEGREE = 60;

  const northSouthNm = (lat - config.lat) * NM_PER_DEGREE;
  const eastWestNm =
    (lon - config.lon) * NM_PER_DEGREE * Math.cos((config.lat * Math.PI) / 180);

  const scale = Math.min(width, height) / 2 / config.radiusNm;

  return {
    x: width / 2 + eastWestNm * scale,
    y: height / 2 - northSouthNm * scale,
  };
}
