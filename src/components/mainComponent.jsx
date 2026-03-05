import React from 'react';
import Recipe from "./biteRecipe"
import IngredientsList from './ingredients';

function Main() {

  const [ingredients,setIngredients] = React.useState(['a','a','a','a'])
  
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ ingredient}</li>
  ))

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
          
          <IngredientsList listIngredients={ingredientsListItems} recipeShow = {toggleRecipeShown} ingredientsListOF = {ingredients} />
        }
          
        {recipeShown && <Recipe></Recipe>}
</main>

    </>
  )
}
export default Main