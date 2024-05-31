import './App.css'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import MyFooter from './components/MyFooter'
import AllTheBooks from './components/AllTheBooks';
import fantasy from './fantasy.json';
import Button from './components/Button';
import ButtonType from './components/ButtonType';
import { useState } from 'react';


export default function App() {
  const [type, setType] = useState('fantasy');
  return (
    <>       
      <MyNav />
      <Welcome />
      <Button setType={setType} />
      <ButtonType type={type} />
      <AllTheBooks books={fantasy} />
      <MyFooter />        
    </>
  )
}


