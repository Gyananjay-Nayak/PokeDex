import Pokemoncards from './components/Pokemoncards'
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [pokemon, setPokemon]= useState([]);
  const[ page, setPage]= useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  
  const [loading, setLoading]= useState(true);

  const getPokemon= async ()=>{
    const res= await fetch(page);
    const data= await res.json();
    setLoading(false);
    setPage(data.next);
    // console.log(data);


    function pokemonObject(results){
      
      results.forEach(async eachPokemon => {
        const res = await fetch(`${eachPokemon.url}`)
        const data= await res.json();
        setPokemon(currentList=>[...currentList,data])
      });
      // console.log(pokemon);
    }
    
    pokemonObject(data.results);
    //await console.log(pokemon);
  }
  useEffect(()=>{
    setLoading(true)
    getPokemon()
  },[]);

  
  if(loading) return (<p>Loading....</p>)
  return (
    <>
      <div className='app-container'>
        <h1>PokeDex</h1>
        <div className='pokemon-container'>
          <div className='all-container'>
            {pokemon.map((eachPokemon, index)=>{
              // console.log(eachPokemon.types[0]);
              // return(<li>{eachPokemon.sprites.front_default}</li>)
              return(
              <Pokemoncards
              num={index+1}
              id={eachPokemon.id}
              name={eachPokemon.name}
              image={eachPokemon.sprites.other.dream_world.front_default}
              type={eachPokemon.types[0].type.name}
              key={index}
              />
              )
            })}
          </div>
          <button className='load' onClick={()=>{getPokemon()}}>Load More</button>
        </div>
      </div>
    </>
  );
}

export default App;
