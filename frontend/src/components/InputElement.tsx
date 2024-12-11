
interface InputProps {
    value: string;
    type: string;
    placeholder: string;
    reference?: any;}

export const InputELement = ({ value, type, placeholder, reference }: InputProps) => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='pl-2'>{value}</div>
      
        <input
            className='w-60 rounded-lg shadow-sm h-10 p-4 border border-slate-200'
            type={type}
            placeholder={placeholder} 
            ref={reference} 
          />
    </div>
  )
}
