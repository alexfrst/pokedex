import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonCaroussel from "./components/PokemonCaroussel";
import { Route, Routes } from "react-router-dom";
import Details from "./components/PokemonDetailsHandler";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonCaroussel count={10} />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
