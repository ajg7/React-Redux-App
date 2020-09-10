import {
    FETCH_POKEMON,
    FETCH_POKEMON_ERROR,
    FETCH_POKEMON_SUCCESS
} from "../actions"

const initialState = {
    names: [],
    loadingPokemon: true,
    errorMessage: ""
}

export default(state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                loadingPokemon: true
            }
        case FETCH_POKEMON_ERROR:
            return {
                ...state,
                loadingPokemon: false,
                errorMessage: action.payload.message
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                names: action.payload,
                loadingPokemon: false
            }
        default:
            return state;
    }
}