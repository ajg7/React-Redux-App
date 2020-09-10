import React from "react";

const Pokemon = props => {
    const { pokemonName } = props;

    return(
        <div>
            <p>{pokemonName}</p>
        </div>
    )
}

export default Pokemon;