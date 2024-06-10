import { useState, useEffect } from 'react';
import SingleBook from './SingleBook';
import { CircularProgress } from "@mui/material";
import CommentArea from './CommentArea';

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
    }, 500); // Simulate a delay for filtering

    return () => clearTimeout(timer);
  }, [books, testo]);

  return (
    <main className='flex justify-center gap-[50px]'>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-y-5 gap-5 mt-[50px]'>
          {filteredBooks.map(book => (
            <SingleBook book={book} key={book.asin} selected={selected} setSelected={setSelected}/>
          ))}
        </section>
      )}
        <section>
        <CommentArea asin={selected}/>
        </section>
    </main>
  );
}
