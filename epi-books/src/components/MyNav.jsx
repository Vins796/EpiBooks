import { useContext } from 'react'
import Input from './Input'
import { ThemeContext } from '../modules/Context'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function MyNav({ testo, handleChange, navLink }) {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    let [themeCtx, setThemeCtx] = useContext(ThemeContext)

    const toggleTheme = () => {
        setThemeCtx((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    return (
        <nav className={classNames('flex justify-around items-center py-[18px]', themeCtx === 'dark' ? 'bg-stone-950' : 'bg-stone-100')}>
            <div className="text-indigo-400 uppercase"><a className="font-bold text-xl" href="#">EpiBooks</a></div>
            <div>
                <ul className="flex gap-10">
                    <li><a className={classNames('hover:text-indigo-400', themeCtx === 'dark' ? 'text-white' : 'text-black')} href="#">Home</a></li>
                    <li><a className={classNames('hover:text-indigo-400', themeCtx === 'dark' ? 'text-white' : 'text-black')} href="#">About</a></li>
                    <li><a className={classNames('hover:text-indigo-400', themeCtx === 'dark' ? 'text-white' : 'text-black')} href="#">Browse</a></li>
                </ul>
            </div>
            <Input testo={testo} handleChange={handleChange}/>
            <button className="bg-violet-400" onClick={toggleTheme}>
                {themeCtx === 'dark' ? (
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                )}
            </button>
        </nav>
    )
}
