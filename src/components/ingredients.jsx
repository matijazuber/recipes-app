export default function Ingredients(props){
  return(<>
         <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">{props.listIngredients}</ul>
  </>)
}