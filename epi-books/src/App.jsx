// Importo stile css app
import './App.css';

// Importo i componenti
import MyNav from './components/MyNav';
import Home from './pages/Home';
import About from './pages/About';
import Contatti from './pages/Contatti';
import MyFooter from './components/MyFooter';

// Importo gli stati
import { useState } from 'react';
import { ThemeContext } from './modules/Context';

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";




export default function App() {

  const [theme, setTheme] = useState('dark')

  const [type, setType] = useState('fantasy');

  const [testo, setTesto] = useState('');
  const handleChange = (e) => setTesto(e.target.value);

  return (
    <Router>     
      <ThemeContext.Provider value={[theme, setTheme]}>
        <MyNav testo={testo} setTesto={setTesto} handleChange={handleChange} navLink={NavLink}/>

        <Routes>
          <Route path='/' element={<Home type={type} setType={setType} testo={testo}/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contatti' element={<Contatti />}></Route>
        </Routes>

        <MyFooter /> 
      </ThemeContext.Provider>               
    </Router>
  )
}


