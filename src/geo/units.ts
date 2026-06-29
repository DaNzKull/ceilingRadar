export const knotsToKmh = (kt: number): number => kt * 1.852;
export const feetToMeters = (ft: number): number => ft * 0.3048;

export function distanceKm(
  lat: number,
  lon: number,
  centerLat: number,
  centerLon: number,
): number {
  const NM_PER_DEGREE = 60;
  const northSouthNm = (lat - centerLat) * NM_PER_DEGREE;
  const eastWestNm =
    (lon - centerLon) * NM_PER_DEGREE * Math.cos((centerLat * Math.PI) / 180);
  const distanceNm = Math.sqrt(northSouthNm ** 2 + eastWestNm ** 2);
  return distanceNm * 1.852;
}
