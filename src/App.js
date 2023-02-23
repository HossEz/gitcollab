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
    const response = await fetch('https://api.edamam.com/search?q=american&app_id=9c154bcd&app_key=59de9ed7e55180cb89b6550c6c272788')
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
}

useEffect(() => {
  getRecipes()
}, [])

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
