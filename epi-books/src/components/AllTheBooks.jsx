// import { useState } from 'react';
// import SingleBook from './SingleBook';
// import { CircularProgress } from "@mui/material";

// export default function AllTheBooks({books, testo}) { 

//   const [isLoading, setIsLoading] = useState(false);

//   return (
//     <>    
//       <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 mt-5 '>
//         {setIsLoading(true)}
//         {books
//         .filter(book => book.title.toLowerCase().includes(testo))
//         .map(book => (
//               <SingleBook book={book} key={book.asin}/>
//         ))}
//         {setIsLoading(false)}
//       </main>
//       {isLoading && <CircularProgress />}
//     </>
//   )
// }

import { useState, useEffect } from 'react';
import SingleBook from './SingleBook';
import { CircularProgress } from "@mui/material";

export default function AllTheBooks({ books, testo }) {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);

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
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 mt-[50px]'>
          {filteredBooks.map(book => (
            <SingleBook book={book} key={book.asin} />
          ))}
        </main>
      )}
    </>
  );
}
