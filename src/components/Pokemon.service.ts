import { IPokeApiResponse } from "./types";

function getFirstAbility(pokemon: any) {
  return pokemon.abilities[0]?.ability?.name || null;
}

function convertPoundsToKilograms(pokemon: any) {
  return Math.round(pokemon.weight / 2.205) || 0;
}

export { getFirstAbility, convertPoundsToKilograms };
