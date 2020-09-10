import {
    FETCH_CHARACTERS,
    FETCH_CHARACTERS_ERROR,
    FETCH_CHARACTERS_SUCCESS
} from "../actions"

const initialState = {
    characters: [],
    statuses: [],
    loadingCharacters: true,
    errorMessage: ""
}

export default(state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return {
                ...state,
                loadingCharacters: true
            }
        case FETCH_CHARACTERS_ERROR:
            return {
                ...state,
                loadingCharacters: false,
                errorMessage: action.payload.message
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload.characters,
                statuses: action.payload.statuses,
                loadingCharacters: false
            }
        default:
            return state;
    }
}