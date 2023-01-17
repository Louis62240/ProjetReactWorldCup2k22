import React from "react";
import '../style/MatchList.css';

function MatchList(props) {
    return(
        <div className="itemMatch">
            <p>{props.name}</p>
            <i>{props.content}</i>
            <p>{props.score}</p>
        </div>
    );
}
export default MatchList;