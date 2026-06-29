export function startLoop(intervalMs: number, tick: () => void): void {
  tick();
  setInterval(tick, intervalMs);
}
