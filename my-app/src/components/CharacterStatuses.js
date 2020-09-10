import React from "react";
import { connect } from "react-redux";
import Characters from "./Characters";

const CharacterStatuses = props => {
    return (
        <>
            {props.statuses.map(status => {
                return <Characters key={new Date()} status={status} />
            })}
        </>
    );
}

function mapStateToProps(state) {
    return {
        statuses: state.statuses
    };
}

export default connect(mapStateToProps, {})(CharacterStatuses);