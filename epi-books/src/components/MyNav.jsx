import React from "react";

export default function MyNav() {
    return (
        <nav className="flex justify-between items-center px-[30px] py-[18px] bg-stone-950">
            <div className="text-indigo-400"><a className="font-bold text-xl" href="#">LOGO</a></div>
            <div>
                <ul className="flex gap-10">
                    <li><a className="text-white hover:text-indigo-400" href="#">Home</a></li>
                    <li><a className="text-white hover:text-indigo-400" href="#">About</a></li>
                    <li><a className="text-white hover:text-indigo-400" href="#">Browse</a></li>
                </ul>
            </div>
            <div className="text-indigo-400 border-red-100"><a className="text-xl font-bold" href="#">U</a></div>
        </nav>
    )
}