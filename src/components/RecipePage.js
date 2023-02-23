import { useParams } from "react-router-dom"

export default function RecipePage({recipes}){
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec?.recipe?.recipe?.label.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(recipe)
    
    return (
        <section>
            <h1>{recipe?.recipe.label}</h1>
        </section>
    )
}