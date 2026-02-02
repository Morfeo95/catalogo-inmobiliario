import theme from "../data/config.json";
import type { Inmobiliaria } from "../types/Inmobiliaria";
import Button from "./ui/Button";
import { SquarePen, Download } from "lucide-react";

interface HeroProps {
  settings: Inmobiliaria;
  isLoggedIn?: boolean;
  onEdit?: () => void;
  onDownload?: () => void;
}

export default function Hero({ settings, isLoggedIn = false, onEdit, onDownload }: HeroProps) {
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-4/5 overflow-hidden">
      <img src={settings.hero} className="w-11/12 rounded-2xl" />

      <div
        className="absolute left-1 bottom-1 ml-[7%] bg-[#ffffffa4] p-4 rounded-xl"
        style={{
          color: theme.text,
          fontFamily: theme.fontTitle
        }}
      >
        <h1 className="text-5xl">{settings.nombre}</h1>
        <h2 className="text-3xl">{settings.mensaje}</h2>
        <h3 className="text-2xl">{settings.whatsapp}</h3>
        <h4 className="text-lg">{settings.direccion}</h4>

        {isLoggedIn && (
          <div className="flex gap-3 mt-4">
            <Button onClick={onEdit}>
              <SquarePen /> Editar
            </Button>
            <Button onClick={onDownload}>
              <Download /> Descargar JSON
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
