import './App.css';
import RecipeCard from './components/RecipeCard';
import './main.css';

function App() {
  return (
    <>
    <div id='container'>
    <header>
      <h1>Penger</h1>
    </header>
    <main>
    <RecipeCard title="Pizza" ingress="Italiensk Pizza"/>
    </main>
    <footer>

    </footer>
    </div>
    </>
  );
}

export default App;
