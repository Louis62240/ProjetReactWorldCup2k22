import React from "react";
import { useParams } from "react-router-dom";
import MatchList from "../components/MatchList";
import AppelApi from "../components/AppelAPI";

const DEFAULT_MATCH = [
    {
        id: 1,
        name:"France-Japon",
        score:"1-1",
    },
    {
        id: 2,
        name:"Tunisie-France",
        score:"2-1",
    },
    {
        id: 3,
        name:"France-Qatar",
        score:"6-0",
    },

]

const Reference = () => {
    const [score, setScore] = React.useState(0);
    const [info, setInfo] = React.useState(DEFAULT_MATCH);
    const matchList = info.map((info) => {
        return (
            <>
            <div className="itemMatch">
            <button className="delete" onClick={() => onDelete(info.id)}>
            ❌
            </button>
            </div>
            <MatchList name={info.name} score={info.score} />
            </>
        );
    });
   
    const newScore = () => {
        console.log("Render", score);
        setScore(score + 1);
    }
    const onDelete = (infoId) => {
        setInfo((curr) => curr.filter((info)=> info.id !== infoId));
    }
    const { id } = useParams();
    return(
        <div className="Reference">
            Nos références : {id}
            <br></br>
            {score}
            <br></br>
            <button onClick={newScore}>GOALLLLL</button>
            {matchList}
            <AppelApi />
        </div>
    );
}

export default Reference;