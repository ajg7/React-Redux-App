import React from "react";

const Characters = ({ character, status }) => {
    return(
        <div>
            <h3>{character}</h3>
            <h4>{status}</h4>
        </div>
    )
}


export default Characters;