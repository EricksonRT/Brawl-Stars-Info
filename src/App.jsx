import './App.css';
import Navbar from './components/Nabvar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Icons from './components/Icons/Icons';
import Brawlers from './components/Brawlers/Brawlers';
import Events from './components/Events/Events';
import Maps from './components/Maps/Maps';
import GameModes from './Game-Modes/GameModes';
import Footer from './components/Footer/Footer';
import BrawlerDetailContainer from './components/BrawlerDetailContainer/BrawlerDetailContainer';
function App() {
  return (
    <>
      <Navbar />
      {/* Rutas */}
      <Routes>
        <Route path="/" />
        <Route path="/events/" element={<Events />} />
        <Route path="/brawlers/" element={<Brawlers />} />
        <Route path="/brawlers/:brawlerName/" element={<BrawlerDetailContainer />} />
        <Route path="/maps/" element={<Maps />} />
        <Route path="/game-Modes/" element={<GameModes />} />
        <Route path="/icons/" element={<Icons />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
