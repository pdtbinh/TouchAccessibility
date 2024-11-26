import "./Router.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blinder from "../components/blinder/Blinder";
import Spots from "../components/spots/Spots";
import Home from "../pages/home/Home";
import Levels from "../pages/levels/Levels";
import Maze from "../pages/mazes/Maze";
import More from "../pages/more/More";
import Rules from "../pages/rules/Rules";
import Settings from "../pages/settings/Settings";
import { L3x3, L5x5 } from "../pages/levels/levelMaps/levelMaps";

export default function Router() {
  return (
    <BrowserRouter>
      <Blinder></Blinder>
      <Spots></Spots>
      <Routes>
        <Route path="/" element={null}>
          <Route index element={<Home />} />
          <Route path="maze" element={null}>
            <Route index element={<Levels />} />
            <Route path="3x3" element={<Maze mazeStatus={L3x3} />} />
            <Route path="5x5" element={<Maze mazeStatus={L5x5} />} />
          </Route>
          <Route path="more" element={<More />} />
          <Route path="rules" element={<Rules />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
