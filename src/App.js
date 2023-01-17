import './App.css';
import Home from './pages/Home';
import Reference from './pages/Reference';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Routes,Route,Link } from 'react-router-dom';
import MatchCup2k22 from './pages/MatchCup2k22';
import Header from './style/Header.css';
function App() {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px'}}>
    <ul style={{listStyle: 'none',margin: '0',padding: '0',display: 'flex'}}>
      <li style={{margin: '0 10px'}}><Link style={{textDecoration: 'none',color: 'black',fontSize: '1.2em'}} to="/">Timer</Link></li>
      <li style={{margin: '0 10px'}}><Link style={{textDecoration: 'none',color: 'black',fontSize: '1.2em'}} to="/MatchCup2k22">Match de la coupe du monde</Link></li>
    </ul>
    </div>
    <Routes>
      <Route class="active" path="/" element={<Home color="red" sizeTexte="25" align="center"></Home>} />
      <Route path="/MatchCup2k22" element={<MatchCup2k22 />} />
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
