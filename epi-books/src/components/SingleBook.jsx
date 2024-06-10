import { useState } from "react"
import CommentArea from "./CommentArea";

export default function SingleBook ({ book, selected, setSelected }) {

    // const [selected, setSelected] = useState(false);

    return (
        <div className="mx-auto">
            <div 
                style={{border: selected === book.asin ? '2px solid red' : 'none'}}
                className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto text-center w-[350px] h-[400px] mb-5" 
                onClick={() => setSelected(book.asin) }>
                
            
                  <a href="#">
                      <img className="rounded-lg h-full w-full" src={book.img} alt={book.title} />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                      </a>
                      <span className="mb-3 me-[20px] text-gray-700 dark:text-gray-400">{book.price}</span>
                      <span className="mb-3 text-gray-700 dark:text-gray-400 capitalize">{book.category}</span> 
                  </div>
            </div> 
            {/* {selected && <CommentArea asin={book.asin}/>}             */}
        </div>
    )
}