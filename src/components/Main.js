import RecipeCard from "./RecipeCard";
// import recipes from "../resources/recipes";
import { Link } from "react-router-dom";

export default function Main({recipes}){
    return (
        <>
             {recipes.map((recipe, index) => (
            <Link className="haha" key={index} to={recipe?.recipe?.label.replace(/\s/g, "-").toLowerCase()}>
                    <RecipeCard title={recipe?.recipe?.label}/>
                </Link>
             ))}
        </>
    )
}