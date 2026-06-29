const params = new URLSearchParams(window.location.search);
const lat = Number(params.get("lat")) || 47.53;
const lon = Number(params.get("lon")) || 21.63;
const radiusNm = Number(params.get("radius")) || 30;

export const config = { lat, lon, radiusNm };

export const ADSB_URL = import.meta.env.PROD
  ? `https://api.airplanes.live/v2/point/${config.lat}/${config.lon}/${config.radiusNm}`
  : `/adsb/v2/point/${config.lat}/${config.lon}/${config.radiusNm}`;
export const ADSBDB_BASE = "https://api.adsbdb.com/v0";
