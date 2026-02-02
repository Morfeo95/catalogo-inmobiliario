import theme from '../../data/config.json'
import {
  Bath,
  DoorClosed,
  Warehouse,
  BadgeCheck,
  BadgeX,
  SquarePen
} from 'lucide-react';
import Button from '../ui/Button';
import type { House } from '../../types/House';

interface HouseCardProps {
  house: House;
  onClick?: () => void;
  onEdit?: (house: House, e: React.MouseEvent) => void;
  isLoggedIn?: boolean;
}


export default function HouseCard({
  house,
  onClick,
  onEdit,
  isLoggedIn = false
}: HouseCardProps) {

  const {
    titulo,
    precio,
    zona,
    recamaras,
    banos,
    cochera,
    estatus,
    descripcion,
    imagenes,
    tipo
  } = house;

  return (
    <article
      className="relative h-fit w-90 rounded-2xl
        shadow-lg hover:shadow-2xl hover:shadow-gray-500/50 hover:scale-105
        transition duration-300 ease-in-out overflow-hidden"
      style={{
        backgroundColor: theme.secondary,
        fontFamily: theme.fontBody,
        color: theme.textHover
      }}
    >
      <div onClick={onClick} className="flex flex-col items-center">
        <div className="w-full h-58">
          <img
            src={imagenes[0]}
            className="w-full h-full object-cover"
            alt={titulo}
          />
        </div>

        <h1 className="text-2xl font-bold mt-2">{titulo}</h1>

        <h2 className="text-2xl">
          {tipo === "venta" ? "Precio de Venta:" : "Renta mensual:"}
          {" $"}
          {precio.toLocaleString()}
        </h2>

        <div className="items-start mb-2 text-md">
          <h3>
            <span className="font-bold">Zona:</span> {zona}
          </h3>

          <p className="flex gap-1">
            <DoorClosed /> {recamaras} {recamaras > 1 ? "habitaciones" : "habitación"}
          </p>

          <p className="flex gap-1">
            <Bath /> {banos} {banos > 1 ? "baños" : "baño"}
          </p>

          <p className="flex gap-1">
            <Warehouse /> {cochera} {cochera > 1 ? "vehículos" : "vehículo"}
          </p>

          <p className="flex items-center gap-1">
            <span className="font-bold">Disponibilidad:</span>
            {estatus === "Disponible" ? <BadgeCheck /> : <BadgeX />}
            <span className="text-xs">{estatus}</span>
          </p>

          <p>
            <span className="font-bold">Descripción:</span>{" "}
            {descripcion.substring(0, 30)}...
          </p>
        </div>
      </div>

      {isLoggedIn && (
        <div className="absolute top-1 right-1">
          <Button onClick={(e) => onEdit?.(house, e)}>
            <div className="flex items-center gap-1">
              <SquarePen /> Editar
            </div>
          </Button>
        </div>
      )}
    </article>
  );
}
