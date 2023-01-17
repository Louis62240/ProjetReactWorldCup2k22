import React from "react";  

function Bloc_1(props) {
    const divStyle={
        color: props.color,
        fontSize: props.sizeTexte + "px",
        textAlign: props.align,
    }
    return(
        <>
        <h1 style={divStyle}>Match terminés</h1>
        <div className="Bloc_1">
            <p style={divStyle}>{props.equipe1} VS {props.equipe2}</p>
        </div>
        
        </>
    );
} 

export default Bloc_1;