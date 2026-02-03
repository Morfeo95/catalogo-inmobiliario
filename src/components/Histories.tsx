import data from '../data/histories.json'
import dataInm from '../data/inmobiliaria.json'
import HistoryCard from './ui/HistoryCard'

export default function Histories() {

    const historiesArray = data.histories || data;

    return (
        <section className='flex flex-col items-center justify-center mt-15'>
            <div className='flex  flex-col w-11/12 items-center'>
                
                <div className='flex gap-6 items-stretch w-full'>
                    <div className='relative rounded-2xl 
                    lg:w-2xl h-auto shrink-0 overflow-hidden'>
                        <img src={dataInm.historyImg} 
                        className='lg:block hidden absolute inset-0
                         lg:w-full lg:h-full object-cover' />
                    </div>
                    <div className='flex flex-wrap gap-6 flex-1'>
                    {historiesArray.map(histories => (
                        <HistoryCard
                            key={histories.id}
                            name={histories.title}
                            date={histories.date}
                            history={histories.history}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>    
        
    )
}
