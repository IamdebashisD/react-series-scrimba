import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CustomComponent() {
  return (<>
      <header>
        <img src={reactLogo} alt="react-logo" width={100} />
      </header>
      <main>
        <h1>Reasons, I'm exited to learn React</h1>
        <div style={{ width: '100%', height: '200px', backgroundColor:'#21222A'}}>
          <ol style={{display:'inline-list-item', alignItems:'self-start'}} >
          <li>React is exciting to learn because it is a popular, powerful, and versatile JavaScript library for building user interfaces</li>
          <li>It's known for its ease of use, component-based architecture, and strong community support, making it a great choice for both beginners and experienced developers</li>
          <li> Furthermore, React's popularity leads to numerous job opportunities with competitive salaries. </li>
        </ol>
        </div>
      </main>
      <footer>
        <p>Copyright &copy; das development. All rights reserved.</p>
      </footer>
      </>
  )
}

function App() {
  return (
    <> 
    <CustomComponent/>
    </>
  )
}

export default App


