export function altitudeColor(altitudeFt: number): string {
  const t = Math.min(Math.max(altitudeFt / 40000, 0), 1);
  const hue = t * 200; // 0 = piros (alacsony), 240 = kék (magas)
  return `hsl(${hue}, 100%, 55%)`;
}
