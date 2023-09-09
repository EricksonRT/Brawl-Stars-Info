import "./App.css";
import Navbar from "./components/Nabvar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Icons from "./components/Icons/Icons";
import Brawlers from "./components/Brawlers/Brawlers";
import Events from "./components/Events/Events";
import Maps from "./components/Maps/Maps";
import GameModes from "./components/Game-Modes/GameModes";
import Footer from "./components/Footer/Footer";
import BrawlerDetailContainer from "./components/BrawlerDetailContainer/BrawlerDetailContainer";
import GameModeDetailContainer from "./components/GameModeDetailContainer/GameModeDetailContainer";
import NOT_FOUND_404 from "./components/404/404";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/brawlers/" element={<Brawlers />} />
        <Route
          path="/brawlers/:brawlerName/"
          element={<BrawlerDetailContainer />}
        />
        <Route path="/maps/" element={<Maps />} />
        <Route path="/game-modes/" element={<GameModes />} />
        <Route
          path="/game-modes/:idGameMode"
          element={<GameModeDetailContainer />}
        />
        <Route path="/icons/" element={<Icons />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NOT_FOUND_404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
