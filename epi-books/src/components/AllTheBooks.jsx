import SingleBook from './SingleBook';
import React, {useState} from "react";
import Input from './Input';


export default function AllTheBooks(props) {

  const [testo, setTesto] = useState(''); 

  const handleChange = (e) => setTesto(e.target.value);
  

  return (
    <>
      <Input testo={testo} handleChange={handleChange}/>
    
      <main className='grid grid-cols-4 gap-y-[50px] my-[50px] px-[100px]'>
        {props.books
        .filter(book => book.title.toLowerCase().includes(testo))
        .map(book => (
              <SingleBook book={book} key={book.asin}/>
        ))}
      </main>
    </>
  )
}
