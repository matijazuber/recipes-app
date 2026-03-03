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
            <input placeholder="e.g oregano" className="input" name="ingredient"></input>
            <button className="buttonInput">+ Add ingredient</button>
          </form>
          
        </div>
        
        <ul>
          {ingredientsListItems}
          </ul>
      </main>
    </>
  )
}
export default Main