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

  ctx.strokeStyle = altitudeColor(plane.altitude);
  ctx.lineWidth = 1;

  trail.forEach((pos, i) => {
    if (i === 0) return;
    const from = toScreen(
      trail[i - 1].lat,
      trail[i - 1].lon,
      ctx.canvas.width,
      ctx.canvas.height,
    );
    const to = toScreen(pos.lat, pos.lon, ctx.canvas.width, ctx.canvas.height);
    ctx.globalAlpha = i / trail.length;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;
}
