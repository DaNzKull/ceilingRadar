export function drawCenter(ctx: CanvasRenderingContext2D): void {
  const cx = ctx.canvas.width / 2;
  const cy = ctx.canvas.height / 2;

  ctx.beginPath();
  ctx.arc(cx, cy, 3, 0, Math.PI * 2);
  ctx.fillStyle = "cyan";
  ctx.fill();
}
