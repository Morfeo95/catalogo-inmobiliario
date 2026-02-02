import data from "../data/houses.json";
import type { House } from "../types/House";

export const getInitialHouses = (): House[] => {
  const stored = localStorage.getItem("houses");

  if (!stored) return data;

  try {
    const parsed: House[] = JSON.parse(stored);

    // 🔑 fusionar sin duplicar
    const merged = [
      ...data.filter(
        d => !parsed.some(p => p.id === d.id)
      ),
      ...parsed
    ];

    return merged;
  } catch {
    return data;
  }
};
