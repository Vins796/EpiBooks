import React from 'react';


export default function Welcome() {
  return (
      <div className='flex justify-center items-center h-[80px] w-[70%] mt-[30px] mx-auto border-[1px solid orange] bg-indigo-400 rounded-lg'>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
          </div>
          <h1 className='ms-[10px] text-3xl'>Sfoglia il catalogo</h1>
      </div>
  )
}

