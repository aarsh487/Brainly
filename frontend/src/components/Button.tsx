
interface ButtonProps {
    value: string;
    onClick?: () => void;
}

export const Button = ({value, onClick}: ButtonProps) => {
  return (
    <div className='flex justify-center'>
        <button
            onClick={onClick}
            className='w-60 h-10 bg-blue-400 rounded-sm text-white'
        >
            {value}
        </button>
    </div>
  )
}
