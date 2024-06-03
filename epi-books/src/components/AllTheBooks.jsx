import SingleBook from './SingleBook';
import React, {useState} from "react";
import Input from './Input';


export default function AllTheBooks(props) {

  const [testo, setTesto] = useState(''); 

  const handleChange = (e) => setTesto(e.target.value);
  

  return (
    <>
      <Input testo={testo} handleChange={handleChange}/>
    
      <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 mt-5'>
        {props.books
        .filter(book => book.title.toLowerCase().includes(testo))
        .map(book => (
              <SingleBook book={book} key={book.asin}/>
        ))}
      </main>
    </>
  )
}
