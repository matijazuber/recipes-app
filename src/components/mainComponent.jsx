import React from 'react';
import Recipe from "./biteRecipe"
import IngredientsList from './ingredients';

function Main() {

  const [ingredients,setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prevThings) => [...prevThings,newIngredient]);
  }

  const [recipeShown, setRecipeShown] = React.useState(false)
  
  function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

  return (
    <>
        <main>
  <div className="divInput">
    <form action={addIngredient}>
      <input
        placeholder="e.g oregano"
        className="input"
        name="ingredient"
      />
      <button className="buttonInput">+ Add ingredient</button>
    </form>
        </div>
        {ingredients.length > 0 &&
          
          <IngredientsList recipeShow = {toggleRecipeShown} items = {ingredients} />
        }
          
        {recipeShown && <Recipe></Recipe>}
</main>

    </>
  )
}
export default Main