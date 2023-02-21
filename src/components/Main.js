import RecipeCard from "./RecipeCard";
import recipes from "../resources/recipes";
import { Link } from "react-router-dom";

export default function Main(){
    return (
        <div id='container'>
            <header>
                <h1>Penger</h1>
            </header>
            <main>
                {recipes.map((recipe) => (
                    <Link className="haha" to={recipe.slug}>
                        <RecipeCard title={recipe.title}/>
                    </Link>
                ))}
            </main>
            <footer>
        
            </footer>
        </div>
    )
}