import type { House } from "./House";

export const createEmptyHouse = (): House => ({
  id: Date.now(),
  titulo: "",
  precio: 0,
  zona: "",
  recamaras: 0,
  banos: 0,
  cochera: 0,
  estatus: "Disponible",
  descripcion: "",
  imagenes: [],
  mapa: "",
  tipo: "venta"
});
