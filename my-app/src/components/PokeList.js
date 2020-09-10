import React from "react";
import { connect } from "react-redux";
import Pokemon from "./Pokemon";

const PokeList = props => {
    return (
        <>
            {props.names.map((pokemonName) => {
                return <Pokemon pokemonName={pokemonName} />;
            })}
        </>
    );
}

function mapStateToProps(state) {
    return {
        names: state.names
    };
}

export default connect(mapStateToProps, {})(PokeList);