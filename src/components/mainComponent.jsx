import React from 'react';

function Main() {

  const [ingredients,setIngredients] = React.useState([])
  
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ ingredient}</li>
  ))

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prevThings) => [...prevThings,newIngredient]);
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

  <section>
    <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list">
      {ingredientsListItems}
    </ul>

    <div className="get-recipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button>Get a recipe</button>
    </div>
  </section>
</main>

    </>
  )
}
export default Main