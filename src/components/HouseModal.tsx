import { motion } from "motion/react"; 
import theme from '../data/config.json'
import { BadgeCheck, BadgeX, Bath, DoorClosed, Warehouse, X } from 'lucide-react';
import Carrucel from "./ui/Carrucel";

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
    onClose: () => void;

}
export default function HouseModal({titulo, precio, imagenes, descripcion, zona, recamaras, banos, cochera, estatus, onClose} : HouseModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.section 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl max-w-4xl w-full overflow-hidden relative shadow-2xl"
                style={{
                    backgroundColor: theme.background,
                    fontFamily: theme.fontBody,
                    color: theme.textHover
                }}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 rounded-full p-2"
                >
                    <X/>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Carrucel imagenes={imagenes}/>
                    <div className="p-8"
                        style={{
                            backgroundColor: theme.secondary,
                            fontFamily: theme.fontBody,
                            color: theme.textHover
                        }}
                    >
                        <h1 className="text-3xl font-bold">{titulo}</h1>
                        <p className="text-lg mt-2">Precio: {precio}</p>
                        <p className="text-lg mt-2">Zona: {zona}</p>
                        <p className="flex gap-1 text-lg mt-2"><DoorClosed/>: {recamaras} {recamaras > 1 ? "habitaciones" : "habitacion"} </p>
                        <p className="flex gap-1 text-lg mt-2"><Bath/>: {banos} {banos > 1 ? "baños" : "baño"}</p>
                        <p className="flex gap-1 text-lg mt-2"><Warehouse/>: {cochera} {cochera > 1 ? "vehiculos" : "vehiculo"}</p>
                        <p className="flex items-center gap-1 text-lg mt-2"><span className='flex gap-1 font-bold'>Disponibilidad:</span>{estatus == "Disponible" ? <BadgeCheck/> : <BadgeX/>} <p className='text-xs'>{estatus}</p></p>
                        <p className="text-lg mt-2"><span className="font-bold">Descripcion:</span> {descripcion}</p>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}