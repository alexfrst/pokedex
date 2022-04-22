import {
  IDescription,
  IPokeApiResponseDescription,
  IPokeApiResponsePokemon,
  state,
} from "./types";
import axios from "axios";

function getFirstAbility(pokemon: any) {
  return pokemon.abilities[0]?.ability?.name || null;
}

function capitalize(str: string): string {
  console.log("coucou");
  if (str === "") {
    return "";
  }
  console.log(str.slice(0).toUpperCase());
  return str[0].toUpperCase() + str.slice(1);
}

function getFirstDescription(
  pokemonCharacteristics: IPokeApiResponseDescription
): string {
  const filteredDescriptions = pokemonCharacteristics.descriptions.filter(
    (desc: IDescription) => desc.language.name === "en"
  );
  return filteredDescriptions[0]?.description || "";
}

function convertPoundsToKilograms(pokemon: any) {
  return Math.round(pokemon.weight / 2.205) || 0;
}

function getCallToAction() {
  const texts: string[] = [
    "He's so cute",
    "Give me a pokeball",
    "Let's pay him a visit",
    "Let's trade",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

async function fetchPokemonData(id: number): Promise<state> {
  const pokemonResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  );
  const pokemonData: IPokeApiResponsePokemon = pokemonResponse.data;

  const descriptionResponse = await axios.get(
    `https://pokeapi.co/api/v2/characteristic/${id}/`
  );
  const descriptionsData: IPokeApiResponseDescription =
    descriptionResponse.data;

  return {
    weight: convertPoundsToKilograms(pokemonData),
    firstAbility: getFirstAbility(pokemonData),
    name: capitalize(pokemonData.name),
    description: getFirstDescription(descriptionsData),
    image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
    id: id,
  };
}

export {
  getFirstAbility,
  getCallToAction,
  convertPoundsToKilograms,
  fetchPokemonData,
};
