export default function Input({testo, handleChange}) {

    return (
        <div className='flex items-center justify-center'>
            <input 
                placeholder='Inserisci libro'
                type="text" 
                value={testo} 
                onChange={handleChange}
                className='bg-slate-200 rounded-lg py-[10px] px-[15px] focus:outline-none'
            />
      </div>
    )
}