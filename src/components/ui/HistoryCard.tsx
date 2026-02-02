import theme from '../../data/config.json'

interface HistoryCardProps {
  name: string;
  date: string;
  history: string;
  isLoggedIn?: boolean;
  onEdit?: () => void;
}

export default function HistoryCard({ name, date, history, isLoggedIn, onEdit }: HistoryCardProps) {
    return (
        <div className='relative flex justify-between h-90 w-75 
        flex-col p-3 items-center rounded-2xl
        shadow-lg hover:shadow-2xl hover:shadow-gray-500/50 hover:scale-105
        transition duration-300 ease-in-out'
            style={{
                backgroundColor: theme.secondary,
                fontFamily: theme.fontBody,
                color: theme.textHover
            }}>
            <p className='absolute top-1 right-1 flex justify-end text-sm'>{date}</p>
            <h1 className='text-2xl mt-2'>{name}</h1>
            <h2>{history}</h2>
            {isLoggedIn && (
                <button onClick={onEdit} className="mt-2 text-sm underline">
                    Editar
                </button>
            )}
        </div>
    )
}