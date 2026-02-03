import { motion } from "motion/react"; 
import theme from '../data/config.json'
import { BadgeCheck, BadgeX, Bath, DoorClosed, MapPin, Warehouse, X } from 'lucide-react';
import Carrucel from "./ui/Carrucel";
import { getEmbedMap } from "../utils/getEmbedMap";

interface HouseModalProps {
    titulo: string;
    imagenes: string[];
    precio: number;
    zona: string;
    recamaras: number;
    banos: number;
    cochera: number;
    estatus: string;
    descripcion: string;
    mapa?: string;
    tipo: string;
    onClose: () => void;

}
export default function HouseModal({titulo, precio, imagenes, descripcion, zona, recamaras, banos, cochera, estatus, mapa, tipo ,onClose} : HouseModalProps) {
    const embed = getEmbedMap(mapa);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.section 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl w-full overflow-hidden relative shadow-2xl"
                style={{
                    backgroundColor: theme.background,
                    fontFamily: theme.fontBody,
                    color: theme.textHover
                }}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 rounded-full p-2 z-10 md:z-0"
                >
                    <X/>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 z-1 md:z-0">
                    <Carrucel imagenes={imagenes}/>
                    <div className="p-8"
                        style={{
                            backgroundColor: theme.secondary,
                            fontFamily: theme.fontBody,
                            color: theme.textHover
                        }}
                    >
                        <h1 className="text-lg md:text-3xl font-bold">{titulo}</h1>
                        <p className="md:text-lg mt-2"><span className="font-bold">{tipo == "venta" ? "Precio" : "Renta"  }: </span>{precio}</p>
                        <p className="md:text-lg mt-2"><span className="font-bold">Zona:</span> {zona}</p>
                        <p className="flex gap-1 md:text-lg mt-2"><DoorClosed/>: {recamaras} {recamaras > 1 ? "habitaciones" : "habitacion"} </p>
                        <p className="flex gap-1 md:text-lg mt-2"><Bath/>: {banos} {banos > 1 ? "baños" : "baño"}</p>
                        <p className="flex gap-1 md:text-lg mt-2"><Warehouse/>: {cochera} {cochera > 1 ? "vehiculos" : "vehiculo"}</p>
                        <p className="flex items-center gap-1 md:text-lg mt-2"><span className='flex gap-1 font-bold'>Disponibilidad:</span>{estatus == "Disponible" ? <BadgeCheck/> : <BadgeX/>} <p className='text-xs'>{estatus}</p></p>
                        <p className="md:text-lg mt-2"><span className="font-bold">Descripcion:</span> {descripcion}</p>
                        {embed ? (
                            <iframe
                                src={embed}
                                className="w-full h-22 md:h-52 rounded-xl border"
                                loading="lazy"
                            />
                            ) : mapa ? (
                            <a
                                href={mapa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 mt-3 text-sm underline"
                            >
                                <MapPin size={16} /> Ver ubicación en Google Maps
                            </a>
                            ) : null}

                    </div>
                </div>
            </motion.section>
        </div>
    );
}