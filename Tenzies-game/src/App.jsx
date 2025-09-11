import React from 'react'
import './App.css'
import Dice from './conponents/Dice.jsx'
import {nanoid} from 'nanoid'

function App() {

  const [dice, setDice] = React.useState(generateAllNewDices())
  const [hasWon, setHasWon] = React.useState(false);


  function generateAllNewDices(){
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
      }
    }
  }, [dice]);

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
      <main className='bg-[#f5f5f5] m-5 p-60 rounded-md px-1 justify-center items-center flex flex-col'>
        <h1 className="text-[#2B283A] text-7xl m-2 font-bold mb-9">Tenzies</h1>
        <p className="items-center justify-center font-semibold mb-7">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        {hasWon && <h1 className="text-3xl font-bold text-green-600 mb-7">You Win!</h1>}
        
        <div 
          className="grid items-center justify-center mb-2 gap-7 md:grid-cols-5"
        >
          {diceElement}
        </div>

        <button 
         className='bg-[#5035FF] h-[50px] w-[100px] items-center rounded-[6px] justify-around text-white font-bold my-6'
         onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}

export default App
