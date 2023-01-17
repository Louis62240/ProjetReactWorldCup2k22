import React from 'react';
import Match from '../style/Match.css';
function AppelApi() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch('https://worldcupjson.net/matches')
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }, []);
    const [data2, setData2] = React.useState(null);
    React.useEffect(() => {
        fetch('https://worldcupjson.net/matches/current')
            .then(response => response.json())
            .then(response => setData2(response))
            .catch(err => console.error(err));
    }, []);
    if (!data) {
        return null;
    }
    
    return (
        <div className="row">
            <div className="column">
            <h1>Match terminés :</h1>
            {data.map((data) => (
                <>
                 {data.away_team.goals===null || data.home_team.name==='To Be Determined'? null : <p>{data.home_team.name} {data.home_team.goals} - {data.away_team.goals} {data.away_team.name}</p>}
                </>
            ))}
            </div>
            <div className="column">
            <h1>Match à venir :</h1>
            {data.map((data) => (
            <>
                 {data.away_team.goals!==null ? null : <p>{data.home_team.name} - {data.away_team.name}</p>}
            </>
            ))}</div>
            <div className="column">
            <h1>Match en cours :</h1>
            {data2.map((data2) => (
                <>
                <p>{data2.home_team.name} {data2.home_team.goals} -  {data2.away_team.goals} {data2.away_team.name}</p>
                </>
                ))}  
            </div>  
        </div>
    );
}

export default AppelApi;
