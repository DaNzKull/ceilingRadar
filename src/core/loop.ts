export async function startLoop(
  intervalMs: number,
  tick: () => void,
): Promise<void> {
  await tick();
  setTimeout(() => startLoop(intervalMs, tick), intervalMs);
}
