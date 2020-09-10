import axios from "axios";

export const  FETCH_POKEMON = "FETCH_POKEMON"
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR"


export const fetchPokemon = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_POKEMON });
      axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => {
            const results = response.data.results;
            const pokemonNames = results.map(pokemon => {
            return pokemon.name;
            })
          dispatch({ type: FETCH_POKEMON_SUCCESS, payload: pokemonNames });
        })
        .catch((error) => {
          dispatch({
            type: FETCH_POKEMON_ERROR,
            payload: { message: "You Blacked Out!" }
          });
        });
    };
  };