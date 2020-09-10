import axios from "axios";

    export const FETCH_CHARACTERS = "FETCH_CHARACTERS"
    export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR"
    export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"


export const fetchCharacter = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_CHARACTERS });
      axios
        .get("https://rickandmortyapi.com/api/character")
          .then((response) => {
              const results = response.data.results;
              const characters = results.map(character => {
                return character.name;
              })
              const statuses = results.map(character => {
                return character.status;
              })
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: {characters, statuses} });
        })
        .catch((error) => {
          dispatch({
            type: FETCH_CHARACTERS_ERROR,
            payload: { message: "Existence is Pointless!" }
          });
        });
    };
  };