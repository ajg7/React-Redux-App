import React, { useEffect } from 'react';
import axios from "axios";
import './index.css';
import CharacterList from "./components/CharacterList"
import { connect } from "react-redux";
import { fetchCharacter } from "./store/actions";



function App(props) {
  const { fetchCharacter, loadingCharacters, errorMessage } = props;

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter])


  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(response => {
        const results = response.data.results;
        console.log(results)
        const characters = results.map(character => {
          console.log(character.name)
          return character.name;
        })
        const statuses = results.map(character => {
          console.log(character.status)
          return character.status;
        })
      })
  })


  return (
    <div className="App">
      <h1>Characters from Rick & Morty</h1>
      {!loadingCharacters ? <CharacterList /> : <div>... Fetching Characters</div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingCharacters: state.loadingCharacters,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, { fetchCharacter })(App);
