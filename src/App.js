import './App.css';
import './recipes.css';
import Main from './components/Main';
import {Route, Routes} from 'react-router-dom'
import RecipePage from './components/RecipePage';
import recipes from './resources/recipes';

function App() {
  return (
    <Routes>
      <Route index element={<Main/>} />
      <Route path=':slug' element={<RecipePage recipes={recipes}/>} />
    </Routes>
  );
}

export default App;
