import theme from '../data/config.json'
import { motion } from 'motion/react'

interface BarMenuProps {
    setMenuToShow: (menu: string) => void;
}
export default function BarMenu({setMenuToShow} : BarMenuProps) {
    return (
        <article className="flex flex-col items-center w-3/8 h-screen rounded-2xl overflow-hidden"
            style={{
                backgroundColor: theme.secondary,
                color: theme.textHover,
                fontFamily: theme.fontBody
            }}
        >
            <ul>
                <motion.li className='text-2xl p-6 border-b'
                    style={{
                        borderColor: theme.textHover
                    }}
                    whileHover={{
                        backgroundColor: theme.primary
                    }}
                    onClick={() => setMenuToShow('propiedades')}
                >Editar Propiedades</motion.li>
                <motion.li className='text-2xl p-6 border-b'
                    style={{
                        borderColor: theme.textHover
                    }}
                    whileHover={{
                        backgroundColor: theme.primary
                    }}
                    onClick={() => setMenuToShow('historias')}
                    >Editar Historias</motion.li>
                <motion.li className='text-2xl p-6 border-b'
                    style={{
                        borderColor: theme.textHover
                    }}
                    whileHover={{
                        backgroundColor: theme.primary
                    }}
                    onClick={() => setMenuToShow('ajustes')}
                    >Ajustes</motion.li>
            </ul>
        </article>
    )   
}