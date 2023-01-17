import React, { useState, useEffect } from 'react';
import TimerStyle from '../style/TimerStyle.css';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [records, setRecords] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortAscending, setSortAscending] = useState(true);
  
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
      setTime(0);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handleStopClick = () => {
    setIsRunning(false);
    setRecords([
      ...records,
      {
        time: time,
        date: new Date(),
      },
    ]);
  };
  
  const handleSortClick = (column) => {
    if (sortColumn === column) {
      setSortAscending(!sortAscending);
    } else {
      setSortColumn(column);
      setSortAscending(true);
    }
  };

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  
  let sortedRecords = [...records];
  if (sortColumn) {
    sortedRecords.sort((a, b) => {
      if (sortColumn === 'time') {
        if (sortAscending) {
          return a.time - b.time;
        } else {
          return b.time - a.time;
        }
      } else if (sortColumn === 'date') {
        if (sortAscending) {
          return a.date - b.date;
        } else {
          return b.date - a.date;
        }
      }
    });
  }
  
  return (
    <div>
      <div className="centerDiv">
        <p style={{ fontSize: '2em', fontWeight: 'bold' }}>
          {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
      <div  style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px'}}>
        <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            fontSize: '1em',
           
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            }}
            onClick={handleStartClick}
            >
            Start
            </button>
            <button
            style={{
            backgroundColor: 'red',
            color: 'white',
            fontSize: '1em',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            marginLeft: '10px',
            }}
            onClick={handleStopClick}
            >
            Stop
            </button>
            </div>
            {records.length === 0 ? (
            <p>Pas de résultat enregistré</p>
            ) : (
            <table>
            <thead>
            <tr>
            <th onClick={() => handleSortClick('time')}>Durée <span>▼</span></th>
            <th onClick={() => handleSortClick('date')}>Heure <span>▼</span></th>
            <th onClick={() => handleSortClick('date')}>Date <span>▼</span></th>
            </tr>
            </thead>
            <tbody>
            {sortedRecords.map((record, index) => (
            <tr key={index}>
            <td>{record.time} secondes</td>
            <td>{record.date.toLocaleTimeString()}</td>
            <td>{record.date.toLocaleDateString()}</td>
            </tr>
            ))}
            </tbody>
            </table>
            )}
            </div>
            );
            }
            
            export default Timer;