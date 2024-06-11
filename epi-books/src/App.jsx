// IMPORTO LO STILE DI APP
import './App.css';

// IMPORTO I COMPONENTI
import MyNav from './components/MyNav';
import Home from './pages/Home';
import About from './pages/About';
import Contatti from './pages/Contatti';
import Error from './pages/Error';
import MyFooter from './components/MyFooter';


// IMPORTO GLI STATI
import { useState } from 'react';
import { ThemeContext } from './modules/Context';

// RREACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTE APP.JSX
export default function App() {

  const [theme, setTheme] = useState('dark');

  const [type, setType] = useState('fantasy');

  const [testo, setTesto] = useState('');

  const handleChange = (e) => setTesto(e.target.value);

  return (
    <Router>     
      <ThemeContext.Provider value={[theme, setTheme]}>
        {/* NAVBAR */}
        <MyNav testo={testo} setTesto={setTesto} handleChange={handleChange}/>

        <Routes>
          <Route path='/' element={<Home type={type} setType={setType} testo={testo}/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contatti' element={<Contatti />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>

        {/* FOOTER */}
        <MyFooter /> 
      </ThemeContext.Provider>               
    </Router>
  )
};


