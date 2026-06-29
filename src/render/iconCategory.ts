import type { Aircraft } from "../types";
import type { AircraftIconType } from "../types";

export function getIconCategory(plane: Aircraft): AircraftIconType {
  if (plane.category === "A7") return "helicopter";
  if (plane.category === "A1") return "prop";
  return "jet";
}
