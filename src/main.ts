import "./style.css";
import { fetchAircraft } from "./api/adsb";
import { setupCanvas, clear } from "./render/canvas";
import { drawCenter } from "./render/center";
import { drawAircraft } from "./render/aircraft";
import { startLoop } from "./core/loop";
import { drawTrail } from "./render/trails";
import { recordPositions } from "./core/trails";

const ctx = setupCanvas();

async function render() {
  const planes = await fetchAircraft();
  recordPositions(planes);
  clear(ctx);
  drawCenter(ctx);
  planes.forEach((plane) => drawTrail(ctx, plane));
  planes.forEach((plane) => drawAircraft(ctx, plane));
}

startLoop(2000, render);
