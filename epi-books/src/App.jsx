import './App.css'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import MyFooter from './components/MyFooter'
import Button from './components/Button';
import ButtonType from './components/ButtonType';
import { useState } from 'react';
import { ThemeContext } from './modules/Context';


export default function App() {

  const [theme, setTheme] = useState('dark')

  const [type, setType] = useState('fantasy');

  const [testo, setTesto] = useState('');
  const handleChange = (e) => setTesto(e.target.value);

  return (
    <>     
      <ThemeContext.Provider value={[theme, setTheme]}>
        <MyNav testo={testo} setTesto={setTesto} handleChange={handleChange}/>
        <Welcome />
        <Button setType={setType} />
        <ButtonType type={type} testo={testo}/>
        <MyFooter /> 
      </ThemeContext.Provider>               
    </>
  )
}


