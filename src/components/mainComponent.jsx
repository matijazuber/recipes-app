import React from 'react';

function Main() {

  const [ingredients,setIngredients] = React.useState([])
  
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ ingredient}</li>
  ))

  function handleSubmit(event) {


        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
    
            setIngredients((prevThings) => [
            ...prevThings,newIngredient
          ]);

  }

  return (
    <>
        <main>
        <div className="divInput">
          <form onSubmit={handleSubmit}>
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