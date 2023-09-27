import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import History from './components/History.js';
import Space from './components/Space.js';
import Sports from './components/Sports.js'; 
import Login from './components/Login.js'; 
import Prview from './components/Preview.js'
import Board from './components/Leaderboard.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home  key="Home"/>} />
        <Route path='/history' element={<History  key="history" />} />
        <Route path='/space' element={<Space key="space" />} />
        <Route path='/sports' element={<Sports key="sports" />} />
        <Route path='/login' element={<Login key="login" />} />
        <Route path='/preview' element={<Prview key="preview" />} />
        <Route path='/board' element={<Board key="board" />}  />




      </Routes>
    </BrowserRouter>
  )
}

export default App;

