import { getFirstAbility, convertPoundsToKilograms } from "./Pokemon.service";
import React from "react";
import { IPokeApiResponse } from "./types";

const emptyPokemon = {
  abilities: [],
  weight: null,
};
const pokemon = {
  abilities: [
    {
      ability: {
        name: "chlorophyll",
      },
    },
  ],
  weight: 1000,
};

describe("Tests for pokemon.service", () => {
  describe("Tests for getFirstAbility", () => {
    it("Should return null if there is no abilities", () => {
      expect(getFirstAbility(emptyPokemon)).toEqual(null);
    });
    it("Should return the first ability", () => {
      expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    });
  });

  describe("Tests for convertPoundsToKilograms", () => {
    it("Should return null if there is no weight", () => {
      expect(convertPoundsToKilograms(emptyPokemon)).toEqual(0);
    });
    it("Should return the weight in kilos", () => {
      expect(convertPoundsToKilograms(pokemon)).toEqual(454);
    });
  });
});
