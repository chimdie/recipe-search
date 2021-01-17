import React, {useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('')


  const appId = "5df7aecb";
  const appKey = "5dbdd68dffa55b46e3b81c3c33fac881";
  const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

 const loadData = async (e) => {
   try{
    e.preventDefault()
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data);
   }catch(err){
     console.error(err)
   }
  }

  function queryFunc(e){
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <form className='form' onSubmit={loadData} >
        <input 
          type='text'
          name='query'
          value={query}
          onChange={queryFunc}
          placeholder='Find a recipe'
        />
        {/* <button className="button" type="submit">Search</button> */}
      </form>
      <div className='recipes'>
      {recipes.map((r,id) => (
          <Recipe key={id} title={r.recipe.label} image={r.recipe.image} calories={r.recipe.calories} />
        ))}
      </div>
    </div>
  )
};

export default App;