import React, { useEffect } from 'react';
import axios from "axios";
import './index.css';
import PokeList from "./components/PokeList"
import { connect } from "react-redux";
import { fetchPokemon } from "./store/actions";



function App(props) {
  const { fetchPokemon, loadingPokemon, errorMessage } = props;

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon])


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
      <h1>Pokedex</h1>
      <h2>20 Original Pokemon</h2>
      {!loadingPokemon ? <PokeList /> : <div>... Fetching Pokemon</div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingPokemon: state.loadingPokemon,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, { fetchPokemon })(App);
