import React from 'react';
import Recipe from "./biteRecipeComponent"

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
          <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list">
              {ingredientsListItems}
            </ul>

            {ingredients.length > 3 && <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={()=>setRecipeShown((prevRecipe)=> !prevRecipe)}>Get a recipe</button>
            </div>}
          </section>
        }
        {recipeShown && <Recipe></Recipe>}
</main>

    </>
  )
}
export default Main