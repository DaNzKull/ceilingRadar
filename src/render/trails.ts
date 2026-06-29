import type { Aircraft } from "../types";
import { toScreen } from "../geo/projection";
import { getTrail } from "../core/trails";
import { altitudeColor } from "./colors";

export function drawTrail(
  ctx: CanvasRenderingContext2D,
  plane: Aircraft,
): void {
  const trail = getTrail(plane.icao);
  if (trail.length < 2) return;

  ctx.beginPath();
  trail.forEach((pos, i) => {
    const p = toScreen(pos.lat, pos.lon, ctx.canvas.width, ctx.canvas.height);
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });

  ctx.strokeStyle = altitudeColor(plane.altitude);
  ctx.lineWidth = 1;
  ctx.stroke();
}
