import React from 'react'

function Main() {

  const [inputValue, setInputValue] = React.useState('')
  const [ingredients, setIngredients] = React.useState([])

  const handleSubmit = (e) => {

    e.preventDefault()
    if(inputValue.trim()){
      setIngredients([...ingredients, inputValue])
      setInputValue('')
    }
  }

  const ingredient = ingredients.map((item, index)=>(
    <li key={index}>
      {item}
    </li>
  ))



  return (
    <main className="relative justify-center top-[60px] py-[10px] px-[30px] gap-4 opacity-100 h-[38px]">
      <form onSubmit={handleSubmit} className="justify-center items-center flex gap-[12px]">
        <label htmlFor="ingredient" className="sr-only">
          Add Ingredient
        </label>
        <input
          className="rounded-[6px] border border-[#D1D5DB] py-[9px] px-[13px] shadow-sm flex-1 min-w-[150px] max-w-[400px]"
          id="ingredient"
          name="ingredient"
          type="text"
          placeholder="e.g. oregano"
          value={inputValue}
          onChange={(e)=> setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="before:content-['+'] before:mr-[5px] py-[9px] px-[13px] w-[200px]  text-[#FAFAF8] bg-[#141413] rounded-[6px] focus:ring-2 focus:ring-blue font-medium"
        >
        Add Ingredient
        </button>
      </form>
  
      <ul className=''>
        {ingredient}
      </ul>
    
    </main>
  )
}

export default Main

