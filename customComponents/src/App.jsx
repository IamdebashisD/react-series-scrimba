import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function CustomComponent() {
  return (
    <>
      <Header Logo={reactLogo}/>
      <MainContent />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <CustomComponent />
    </>
  )
}

export default App


