import { Link } from 'react-router-dom'
import theme from '../data/config.json'
import data from '../data/inmobiliaria.json'
import { motion } from 'motion/react'

export default function Navbar(){

    return(
        <nav
        className='w-full rounded-2xl overflow-hidden p-2 mb-15'
        style={{backgroundColor: theme.background,
            color: theme.text,
            fontFamily: theme.fontBody
        }}
        >
            <div className='w-11/12 mx-auto'>
                <ul className='flex justify-between pr-7 items-center'>
                    <li className='w-17 rounded-full overflow-hidden'
                    ><Link to="/"><img src={data.logo} alt="" /></Link></li>
                    <motion.li
                        className='p-3 rounded-full'
                        whileHover={{backgroundColor: theme.secondary,
                            color: theme.textHover
                        }}
                    >
                        <a href="#propiedades">propiedades</a>
                    </motion.li>
                    <motion.li
                        className='p-3 rounded-full'
                        whileHover={{backgroundColor: theme.secondary,
                            color: theme.textHover
                        }}
                    >
                        <Link to="http://wa.me/521523456789" target='_blank' >whatsapp</Link>
                    </motion.li>
                </ul>
            </div>
        </nav>
    )
}