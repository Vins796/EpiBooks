import SingleBook from './SingleBook';
import React, {useState} from "react";
import fantasy from '../fantasy.json';

export default function AllTheBooks(props) {

  const [testo, setTesto] = useState(''); 
  const [books, setBooks] = useState(props.books) 
  
  function handleChange(value) {
    setTesto(value)
  

    const booksFiltered = fantasy.filter((book) => {
      return (
        book.title.toLowerCase().includes(value)
      )
    })
    setBooks(booksFiltered);
  }

  return (
    <>
    <div className='flex items-center justify-center mt-[30px]'>

      <input 
        placeholder='Inserisci libro'
        type="text" 
        value={testo} 
        onChange={(e) => handleChange(e.target.value)}
        className='bg-slate-200 rounded-lg p-[15px] w-[40%] focus:outline-none'
        required
      />
    </div>
    
      <main className='grid grid-cols-5 gap-y-[50px] my-[50px] px-[100px]'>
        {books.map(book => (
              <SingleBook book={book} key={book.asin}/>
        ))}
      </main>
    </>
  )
}
