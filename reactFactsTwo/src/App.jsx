import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <>
      <Header logo={reactLogo}/>
      <Main />
    </>
  )
}

export default App
