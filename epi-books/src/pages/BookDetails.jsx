import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../modules/Context";
import CommentArea from "../components/CommentArea";

export default function BookDetails() {

    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
 
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    let [themeCtx, setThemeCtx] = useContext(ThemeContext);

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const url = [
              '/src/book.json',
            ];
    
            const response = await fetch(url);
            const data = await response.json();

            const libroCliccato = data.find((book) => book.asin === id);

            if(libroCliccato) {
                setBook(libroCliccato)
            } else {
                setError('Book not found');
            }
    
          } catch (error) {
            console.error('Errore nella fetch', error);
            setError('Errore nella fetch')
        };
    }
    
        fetchBooks();
      }, [id]);

    
    
      if (!book) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Errore: {error}</div>;
      }
    
    
      return (
        <>
            <div className="mx-auto mt-[70px]">
                <div 
                    className="border border-gray-200 rounded-lg shadow mx-auto text-center w-[350px] h-[450px] mb-[160px]" 
                    onClick={() => setSelected(book.asin) }>                
                
                    <a href="#">
                        <img className="h-full w-full rounded-t-lg" src={book.img} alt={book.title} />
                    </a>
                    <div class="bg-slate-800 p-5 h-[150px] rounded-b-lg whitespace-nowrap">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-ellipsis overflow-hidden">{book.title}</h5>
                        </a>
                        <div>
                            <span className="mb-3 me-[20px] dark:text-gray-400 text-white hover:text-red-600 cursor-pointer">{book.price} $</span>
                            <span className="mb-3 dark:text-gray-400 capitalize text-white hover:text-red-600 cursor-pointer">{book.category}</span>                        
                        </div>
                        <button className="mt-3">
                            <Link to='/'>BACK</Link>
                        </button>
                    </div>
                </div> 
            </div>
            <CommentArea asin={id}/>
        </>
    );
    
}
