import data from "../data/inmobiliaria.json";
import type { Inmobiliaria } from "../types/Inmobiliaria";

export function getInitialSettings(): Inmobiliaria {
  const stored = localStorage.getItem("settings");
  return stored ? JSON.parse(stored) : data;
}
