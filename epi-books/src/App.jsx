import './App.css'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import MyFooter from './components/MyFooter'
import AllTheBooks from './components/AllTheBooks';
import fantasy from './fantasy.json';



export default function App() {
  return (
    <>       
      <MyNav />
      <Welcome />
      <AllTheBooks books={fantasy} />
      <MyFooter />        
    </>
  )
}


