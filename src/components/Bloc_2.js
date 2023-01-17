import React from "react";

function Bloc_2(props) {
    const divStyle={
        color: props.color,
        fontSize: props.sizeTexte + "px",
        textAlign: props.align,
    }
    return(
        <>
        <h1 style={divStyle}>Match en cours</h1>
        <div className="Bloc_2">
            <p style={divStyle}>{props.equipe1} VS {props.equipe2}</p>
        </div>
        </>
    );
}

export default Bloc_2;