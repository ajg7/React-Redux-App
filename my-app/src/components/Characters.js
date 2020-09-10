import React from "react";

const Characters = ({ character, statuses }) => {
    return(
        <div>
            <h3>{character}</h3>
            <h4>{statuses}</h4>
        </div>
    )
}


export default Characters;