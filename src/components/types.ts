interface state {
  name: string;
  firstAbility: string;
  weight: number;
  image_url: string;
  id: number;
  description: string;
}

interface IPokeApiResponsePokemon {
  abilities: { ability: { name: string } }[] | null;
  firstAbility: string;
  weight: number;
  name: string;
  image_url: string;
  id: number;
}

interface IPokeApiResponseDescription {
  descriptions: IDescription[];
}

interface IDescription {
  description: string;
  language: { name: string };
}

export type {
  state,
  IPokeApiResponsePokemon,
  IPokeApiResponseDescription,
  IDescription,
};
