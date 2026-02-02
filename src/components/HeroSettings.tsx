import type { Inmobiliaria } from "../types/Inmobiliaria";
import Button from "./ui/Button";
import { SquarePen } from "lucide-react";
import theme from "../data/config.json";

interface Props {
  settings: Inmobiliaria;
  onEdit: () => void;
}

export default function HeroSettings({ settings, onEdit }: Props) {
  return (
    <section className="relative flex justify-center">
      <img
        src={settings.hero}
        className="w-11/12 rounded-2xl"
      />

      <div
        className="absolute bottom-4 left-10 bg-white/80 backdrop-blur-md p-5 rounded-xl"
        style={{
          fontFamily: theme.fontTitle,
          color: theme.text
        }}
      >
        <h1 className="text-4xl">{settings.nombre}</h1>
        <p className="text-xl">{settings.mensaje}</p>
        <p>{settings.whatsapp}</p>
        <p className="text-sm">{settings.direccion}</p>

        <Button onClick={onEdit}>
          <SquarePen /> Editarrrr
        </Button>
      </div>
    </section>
  );
}
