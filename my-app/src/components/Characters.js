import React from "react";

const Characters = ({ character, status, imgs }) => {

    return(
        <div className="characters">
            <h3>{character}</h3>
            <h4>{status}</h4>
            <img src={imgs} alt={character} />
        </div>
    )
}


export default Characters;