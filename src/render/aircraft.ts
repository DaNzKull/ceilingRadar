import type { Aircraft } from "../types";
import { toScreen } from "../geo/projection";
import { knotsToKmh, feetToMeters } from "../geo/units";
import { planePath } from "./planeIcon";
import { altitudeColor } from "./colors";
import { getRoute } from "../api/routes";
import { getAircraftType } from "../api/aircraftInfo";

export function drawAircraft(
  ctx: CanvasRenderingContext2D,
  plane: Aircraft,
): void {
  const { x, y } = toScreen(
    plane.lat,
    plane.lon,
    ctx.canvas.width,
    ctx.canvas.height,
  );

  // aircraft icon
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(((plane.track ?? 0) * Math.PI) / 180);
  ctx.translate(-12, -12);
  ctx.fillStyle = altitudeColor(plane.altitude);
  ctx.fill(planePath);
  ctx.restore();

  const route = plane.flight ? getRoute(plane.flight) : null;
  const type = getAircraftType(plane.icao);

  // data labels
  const lines = [
    plane.flight ?? "????",
    `${Math.round(feetToMeters(plane.altitude))} m|${Math.round(knotsToKmh(plane.groundSpeed))} km/h`,
    type ? `${type.manufacturer} ${type.model}` : (plane.aircraftType ?? ""),
    route ? `${route.airline}` : "",
    route ? `${route.origin} -> ${route.destination}` : "",
  ].filter(Boolean);

  ctx.font = "20px monospace";
  ctx.fillStyle = "white";
  lines.forEach((line, i) => {
    ctx.fillText(line, x + 10, y + i * 14);
  });
}
