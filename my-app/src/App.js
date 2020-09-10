import React, { useEffect } from 'react';
import axios from "axios";
import './index.css';



function App() {

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon/")
  //     .then(response => {
  //       const results = response.data.results;
  //       console.log(results)
  //       const pokemonNames = results.map(pokemon => {
  //         return pokemon.name;
  //       })
  //       console.log(pokemonNames) 
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // })


  return (
    <div className="App">
    </div>
  );
}

export default App;
