export default function Input({testo, handleChange}) {

    return (
        <div className='flex items-center justify-center mt-[30px]'>
            <input 
                placeholder='Inserisci libro'
                type="text" 
                value={testo} 
                onChange={handleChange}
                className='bg-slate-200 rounded-lg p-[15px] w-[40%] focus:outline-none'
            />
      </div>
    )
}