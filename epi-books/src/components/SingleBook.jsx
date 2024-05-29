import { useState } from "react"

export default function SingleBook ({book}) {
    const [selected, setSelected] = useState(false);

    return (
        <div 
            style={{border: selected ? '2px solid red' : 'none'}}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto text-center w-[350px]" 
            onClick={() => setSelected(!selected) }>
        
              <a href="#">
                  <img className="rounded-t-lg h-[400px] w-full" src={book.img} alt={book.title} />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                  </a>
                  <span className="mb-3 me-[20px] text-gray-700 dark:text-gray-400">{book.price}</span>
                  <span className="mb-3 text-gray-700 dark:text-gray-400 capitalize">{book.category}</span> 
              </div>
        </div>     
    )
}