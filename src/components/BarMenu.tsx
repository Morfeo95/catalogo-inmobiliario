import theme from '../data/config.json'
import { motion } from 'motion/react'

interface BarMenuProps {
    setMenuToShow: (menu: string) => void;
}
export default function BarMenu({setMenuToShow} : BarMenuProps) {
    return (
        <article className="flex flex-col items-center lg:w-1/6 
        lg:h-screen rounded-2xl overflow-hidden"
            style={{
                backgroundColor: theme.secondary,
                color: theme.textHover,
                fontFamily: theme.fontBody
            }}
        >
            <ul className='flex flex-wrap md:w-full lg:flex-col justify-center 
            items-center'>
                <motion.li className='lg:text-2xl md:w-full text-md 
                p-6 lg:border-b'
                    style={{
                        borderColor: theme.textHover
                    }}
                    whileHover={{
                        backgroundColor: theme.primary
                    }}
                    onClick={() => setMenuToShow('propiedades')}
                >Editar Propiedades</motion.li>
                <motion.li className='lg:text-2xl md:w-full text-md p-6
                 lg:border-b'
                    style={{
                        borderColor: theme.textHover
                    }}
                    whileHover={{
                        backgroundColor: theme.primary
                    }}
                    onClick={() => setMenuToShow('historias')}
                    >Editar Historias</motion.li>
                <motion.li className='lg:text-2xl md:w-full text-md p-6
                 lg:border-b'
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