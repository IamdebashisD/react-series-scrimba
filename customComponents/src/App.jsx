import reactLogo from './assets/react.svg'
import './App.css'

function CustomComponent() {
  return (
    <>
      <header>
        <img src={reactLogo} alt="react-logo" width="40px" />
      </header>
      <main>
        <h1>Reasons, I'm exited to learn React</h1>

        <ol>
          <li>React is exciting to learn because it is a popular, powerful, and versatile JavaScript library for building user interfaces</li>
          <li>It's known for its ease of use, component-based architecture, and strong community support, making it a great choice for both beginners and experienced developers</li>
          <li> Furthermore, React's popularity leads to numerous job opportunities with competitive salaries. </li>
        </ol>
      </main>
      <footer>
        <small>Copyright &copy; das development. All rights reserved.</small>
      </footer>
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


