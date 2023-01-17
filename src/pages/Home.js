import React from 'react';
import Timer from '../components/Timer';

function Home(props) {
    const divStyle={
        color: props.color,
        fontSize: props.sizeTexte + "px",
        textAlign: props.align,
    }
    return(
        <>
        <div className="Home">
            <p style={divStyle}>Timer</p>
            <Timer style={divStyle} />
        </div>

        </>
    );
}

export default Home;