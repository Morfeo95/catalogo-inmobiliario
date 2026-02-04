import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react"; 
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarrucelProps {
    imagenes: string[];
}

export default function Carrucel({ imagenes }: CarrucelProps) {
    const [indice, setIndice] = useState(0);

    const siguienteImagen = () => {
        setIndice((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    };

    const imagenAnterior = () => {
        setIndice((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-full max-h-[90vh] aspect-4/3 overflow-hidden bg-black/10">
            <AnimatePresence mode="wait">
                <motion.img
                    key={indice}
                    src={imagenes[indice]}
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className='w-full h-full object-cover'
                />
            </AnimatePresence>

            {imagenes.length > 1 && (
                <>
                    <button 
                        onClick={imagenAnterior}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md transition-colors"
                    >
                        <ChevronLeft className="text-white" size={32} />
                    </button>
                    <button 
                        onClick={siguienteImagen}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md transition-colors"
                    >
                        <ChevronRight className="text-white" size={32} />
                    </button>
                </>
            )}
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {imagenes.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-2 w-2 rounded-full ${i === indice ? 'bg-white' : 'bg-white/50'}`} 
                    />
                ))}
            </div>
        </div>
    );
}