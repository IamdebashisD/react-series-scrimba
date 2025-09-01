import memeThree from './assets/memeThree.png'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import car from './assets/car.avif'

function App() {
  
  return (
    <>
     <Header icon={memeThree}/>
     <Main car={car}/>
    </>
  )
}

export default App
