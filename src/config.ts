export const config = { lat: 47.53, lon: 21.63, radiusNm: 30 };

export const ADSB_URL = import.meta.env.PROD
  ? `https://api.airplanes.live/v2/point/${config.lat}/${config.lon}/${config.radiusNm}`
  : `/adsb/v2/point/${config.lat}/${config.lon}/${config.radiusNm}`;
export const ADSBDB_BASE = "https://api.adsbdb.com/v0";
