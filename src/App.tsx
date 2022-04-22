import React from "react";
import "./App.css";
import PokemonCaroussel from "./components/PokemonCaroussel";
import { Route, Routes } from "react-router-dom";
import Details from "./components/PokemonDetailsHandler";
import { Container, Box, CssBaseline, Typography } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          my: 4,
          ly: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <div className="App" style={{ height: "100%" }}>
          <Routes>
            <Route path="/" element={<PokemonCaroussel count={12} />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </div>
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
