import React from "react";

function Bloc_3(props) {
    const divStyle={
        color: props.color,
        fontSize: props.sizeTexte + "px",
        textAlign: props.align,
    }
    return(
        <>
        <h1 style={divStyle}>Match à venir</h1>
        <div className="Bloc_3">
            <p style={divStyle}>{props.equipe1} VS {props.equipe2}</p>
        </div>
        </>
    );
}

export  default  Bloc_3;