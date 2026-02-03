import data from '../data/footer.json'
import theme from '../data/config.json'
import { Facebook, Instagram, Twitter, ExternalLink } from 'lucide-react'
export default function Footer() {
    return(
        <footer className='w-full'>
            <div className='flex flex-col-reverse md:flex-row gap-4 md:justify-between mt-15 w-11/12 mx-auto
            rounded-2xl p-3'
                style={{
                    backgroundColor: theme.secondary,
                    color: theme.textHover,
                    fontFamily: theme.fontBody
                }}
            >
                <ul className='text-lg'>
                    <li className='text-lg md:text-3xl font-bold'>{data.ciudad}</li>
                    <li>{data.email}</li>
                    <li>{data.telefono}</li>
                    <li>{data.whatsapp}</li>
                    <li>{data.direccion}</li>
                    <li><a target='_blank' href={data.mapsUrl} className='flex gap-1'>Ver en Google Maps <ExternalLink /></a></li>
                </ul>
                <ul className='flex flex-col justify-end md:items-center text-md'>
                    <li className=''>Created By Xavier Vera</li>
                    <li className='flex'>Sito: <a target='_blank' href="https://portafolio-hazel-phi.vercel.app/" className='flex gap-1'>Link <ExternalLink/></a></li>
                    <li>Cogito ergo Codo</li>
                    <li>2026 &copy;</li>
                </ul>

                <ul className='flex flex-col justify-center'>
                    <li className='text-lg md:text-3xl font-bold'>sigue nuestras redes:</li>
                    <div className='flex gap-6 justify-between mt-3'>
                        {data.redes.map((red, index) => (
                            <li key={index}><a target='_blank' href={red}>{red.includes('https://www.facebook.com')  ? <Facebook /> : red.includes('https://www.instagram.com') ? <Instagram /> : red.includes('https://www.x.com') ? <Twitter /> : ''}</a></li>
                        ))}
                    </div>
                </ul>
            </div>
        </footer>
    )   
}