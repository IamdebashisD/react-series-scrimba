import React, { useEffect } from 'react'
import './App.css'
import Dice from './conponents/Dice.jsx'
import {nanoid} from 'nanoid'
import confetti from "canvas-confetti"
import Confetti from 'react-confetti'  //not using this 

function App() {

  const [dice, setDice] = React.useState(() => generateAllNewDices())
  const [hasWon, setHasWon] = React.useState(false);
  const [attempts, setAttempts] = React.useState(0);
  const buttonRef =  React.useRef(null)


  // Function to Reset the Game
  function gameReset(){
    setDice(generateAllNewDices())
    setHasWon(false)
    setAttempts(0)
  }

  function generateAllNewDices(){
    console.log("generated...")
    return new Array(10)
      .fill(0)
      .map(()=> ({
        id: nanoid(),
        value: Math.ceil(Math.random()* 6),
        freeze: false
      }))
  }

  const holdDice = (id) => {
    setDice( prevDice => prevDice.map(die => 
      die.id === id ? {...die, freeze : !die.freeze} : die
    ))
  }
  
  const rollDice = () => {
    if(!hasWon){
      setAttempts(prevAttempts => prevAttempts+1)
    }
    setDice( prevDice => prevDice.map( die => 
      die.freeze ? die : {...die, value: Math.ceil(Math.random()* 6)} 
    ))
  }
  
  React.useEffect(() => {
    // Check if ALL dice are frozen
    const allFrozen = dice.every(die => die.freeze);
    
    // Only proceed if all dice are frozen
    if (allFrozen) {
      // Get the value of the first die
      const firstValue = dice[0].value;
      
      // Check if ALL dice have the same value as the first die
      const allSameValue = dice.every(die => die.value === firstValue);
      
      // If all dice have the same value, player wins!
      if (allSameValue) {
        setHasWon(true);
        //Calling Trigger confetti function
        triggerConfetti()
      }
    }
  }, [dice]);

  
  React.useEffect(()=> {
    if(hasWon){
      buttonRef.current.focus()
    }
  }, [hasWon])
  
  // Confetti function
  const triggerConfetti = () => {
    confetti({
      particleCount:350,
      spread:80,
      origin:{y: 0.4},
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
      shapes: ["circle", "square", "star"],
      scalar: 1.2
    })
  }

  // looping through the dice-array and passing all the required properties
  const diceElement = dice.map( dieObj => 
    <Dice 
      key={dieObj.id} 
      id={dieObj.id}
      value={dieObj.value}
      isFreeze={dieObj.freeze}
      holdDice={() => holdDice(dieObj.id)}
    />
  )

  return (
    <>
      <main className='bg-[#f5f5f5] m-6 p-52 rounded-md px-1 justify-center items-center flex flex-col'>
        <h1 className="text-[#2B283A] text-7xl m-0 font-bold mb-4">Tenzies</h1>
        <p className="items-center justify-center mb-5 font-semibold">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <p className='p-4'>Roll counter: {attempts}</p>
        {hasWon && <h1 className="py-1 mb-2 text-3xl font-bold text-green-600">You Win!</h1>}
        
        <div 
          className="grid items-center justify-center mb-2 p-18 m-9 gap-7 md:grid-cols-5"
        >
          {diceElement}
        </div>
        
        {/* Render the button based on a certain condition of hasWon property. */}
        {!hasWon ? 
          (<button 
            className='bg-[#5035FF] h-[50px] w-[100px] items-center rounded-[6px] justify-around text-white font-bold my-6'
            onClick={rollDice}>Roll
          </button>) 
          :
          (<button 
            className='bg-[#3665a2] h-[50px] w-[100px] items-center rounded-[6px] justify-around text-white font-bold my-6'
            onClick={gameReset}
            ref={buttonRef}
          >Play Again
          </button>)
        }
      </main>
    </>
  )
}

export default App
