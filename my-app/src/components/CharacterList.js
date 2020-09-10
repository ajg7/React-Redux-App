import React from "react";
import { connect } from "react-redux";
import Characters from "./Characters";

const CharacterList = props => {
    return (
        <>
            {props.characters.map((character) => {
                return <Characters key={new Date()} character={character} />;
            })}
        </>
    );
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps, {})(CharacterList);