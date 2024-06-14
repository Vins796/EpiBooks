import { useNavigate } from "react-router-dom";


export default function SingleBook ({ book, selected, setSelected }) {

    const navigazione = useNavigate();

    function vaiAlLibro(id) {
        navigazione(`/details/${id}`);
    }

    return (
        <div className="mx-auto">
            <div 
                style={{border: selected === book.asin ? '2px solid blue' : 'none'}}
                className="border border-gray-200 rounded-lg shadow mx-auto text-center w-[350px] h-[450px] mb-[120px]" 
                onClick={() => setSelected(book.asin) }>                
            
                  <a href="#">
                      <img className="h-full w-full rounded-t-lg" src={book.img} alt={book.title} />
                  </a>
                  <div class="bg-slate-800 p-5 h-[160px] rounded-b-lg whitespace-nowrap">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-ellipsis overflow-hidden">{book.title}</h5>
                      </a>
                      <div>
                        <span className="mb-3 me-[20px] dark:text-gray-400 text-white hover:text-red-600 cursor-pointer">{book.price} $</span>
                        <span className="mb-3 dark:text-gray-400 capitalize text-white hover:text-red-600 cursor-pointer">{book.category}</span>                        
                      </div>
                      <button className="my-3 bg-[#874CCC]" onClick={() => vaiAlLibro(book.asin)}>
                        DEATAILS
                      </button>
                  </div>
            </div> 
        </div>
    )
}