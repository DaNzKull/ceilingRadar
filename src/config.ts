const lat = Number(import.meta.env.VITE_ADSB_LAT);
const lon = Number(import.meta.env.VITE_ADSB_LON);
const radiusNm = Number(import.meta.env.VITE_ADSB_RADIUS_NM);

if (Number.isNaN(lat) || Number.isNaN(lon) || Number.isNaN(radiusNm)) {
  throw new Error("Missing ADS-B env config - check .env.local!");
}

export const config = { lat, lon, radiusNm };

export const ADSB_URL = `/adsb/v2/point/${lat}/${lon}/${radiusNm}`;
export const ADSBDB_BASE = "https://api.adsbdb.com/v0";
