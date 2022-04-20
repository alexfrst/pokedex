import React from "react";
import PokemonDetails from "./PokemonDetails";
import { useParams } from "react-router-dom";

// @ts-ignore
const Details = () => <PokemonDetails id={useParams().id} />;

export default Details;
