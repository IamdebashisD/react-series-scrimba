import React from 'react'
import '@fontsource/inter';
import IngredientsList from './IngredientsList';
import Section from './Section';
import trashThreeHover from '../assets/trashThreeHover.png'
import { getRecipeFromMistral } from '../ai.js'

  
function Main() {
  const [inputValue, setInputValue] = React.useState('')
  const [ingredients, setIngredients] = React.useState(["chicken", "Curd", "Garlic", "Corn flower", "Oil", "Red Chillies" ])
  const [recipe, setRecipe] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)


  // Function for incoming data from user input  
  const handleSubmit = (event) => {
    event.preventDefault()
    if(inputValue.trim()){
      setIngredients([...ingredients, inputValue])
      setInputValue('')
    }
  }

  const VITE_HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;
  const getResponse = async () => {
    setIsLoading(true)
    try{
      const recipeMarkdown = await getRecipeFromMistral(ingredients, VITE_HF_ACCESS_TOKEN)
      setRecipe(recipeMarkdown)
      console.log(recipeMarkdown)
    }catch(error){
      console.log("Failed to get recipe:", error)
    }finally{
      setIsLoading(false)
    }
  }

  const deleteItem = (index) => {
    setIngredients( prev => prev.filter((item, currentIndex) => currentIndex !== index))
  }
  

  const ingredient = ingredients.map((item, index) => (
    <li 
      key={index}
      className="relative items-center justify-between px-2 py-1 pl-2 hover:bg-gray-300 hover:rounded-xl"
    >
      <span className='flex-1'>{item}</span>  
      <button
        onClick={() => deleteItem(index)}
        className='absolute -translate-y-1/2 rounded-full right-3 top-1/2'>
        <img src={trashThreeHover} width={24} height={18} alt="deleteBtn" /> 
      </button>
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
          className="before:content-['+'] before:mr-[5px] py-[9px] px-[13px] w-[160px] text-[#FAFAF8] bg-[#141413] rounded-md focus:ring-2 focus:ring-blue font-medium shadow-sm"
        >
        Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && 
          <IngredientsList 
            ingredient={ingredient}
            ingredients={ingredients}
            getResponse={getResponse}
            isLoading={isLoading}
          />
      }

    {recipe && <Section recipe={recipe}/>}
    </main>
  )
}

export default Main
