export default function MyFooter() {
    return (     
        <footer className="bg-stone-950 dark:bg-gray-900 w-full fixed bottom-0">
                <div className="sm:flex sm:items-center sm:justify-between p-4">
                    <a href="/">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-purple-400 hover:text-indigo-400">EpiBooks</span>
                    </a>
                    <ul className="flex flex-wrap gap-6 items-center mb-6 text-sm max-sm:mt-[20px] font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="text-white hover:text-indigo-400 hover:underline">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-indigo-400 hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-indigo-400 hover:underline">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-indigo-400 hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-500 max-sm:my-2"/>
                <span className="block text-sm text-gray-500 text-center p-4">© 2023 <a href="#" className="text-white hover:text-indigo-400 hover:underline">EpiBooks</a>. All Rights Reserved.</span>
        </footer>
    )
}