import './App.css';
import './recipes.css';
import Main from './components/Main';
import {Route, Routes} from 'react-router-dom'
import RecipePage from './components/RecipePage';
// import recipes from './resources/recipes';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';

function App() {

  const [recipes, setRecipes] = useState([])

  const getRecipes = async() =>{
    const response = await fetch('https://api.edamam.com/search?q=american&app_id=f130c1c2&app_key=05852b60ee10a65dc05b3ff89b05e382&diet=low-carb')
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }

  useEffect(() => {
    getRecipes()
  },[])

  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<Main recipes={recipes}/>} />
      <Route path=':slug' element={<RecipePage recipes={recipes}/>} />
      </Route>
    </Routes>
    
  );
}

export default App;
