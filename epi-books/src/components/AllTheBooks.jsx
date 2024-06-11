import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

import { useState, useEffect } from 'react';
import { CircularProgress } from "@mui/material";

export default function AllTheBooks({ books, testo }) {

  
  const [isLoading, setIsLoading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = books.filter(book => book.title.toLowerCase().includes(testo));
      setFilteredBooks(filtered.slice(0, 12));
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [books, testo]);

  return (
    <main className='flex justify-center gap-[50px]'>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-y-[50px] gap-5 mt-[50px]'>
          {filteredBooks.map(book => (
            <SingleBook book={book} key={book.asin} selected={selected} setSelected={setSelected}/>
          ))}
        </section>
      )}
        <section className='mt-[50px]'>
        <CommentArea asin={selected}/>
        </section>
    </main>
  );
}
