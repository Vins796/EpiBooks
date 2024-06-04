import SingleBook from './SingleBook';

export default function AllTheBooks({books, testo}) { 
  console.log(testo); 

  return (
    <>    
      <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 mt-5'>
        {books
        .filter(book => book.title.toLowerCase().includes(testo))
        .map(book => (
              <SingleBook book={book} key={book.asin}/>
        ))}
      </main>
    </>
  )
}
