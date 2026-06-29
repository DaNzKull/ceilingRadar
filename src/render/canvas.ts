export function setupCanvas(): CanvasRenderingContext2D {
  const canvas = document.querySelector<HTMLCanvasElement>("#radar");
  if (!canvas) throw new Error("No #radar canvas");

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2d context error");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  return ctx;
}

export function clear(ctx: CanvasRenderingContext2D): void {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
