interface state {
  name: string;
  firstAbility: string;
  weight: number;
  image_url: string;
  id: number;
}

interface IPokeApiResponse {
  abilities: { ability: { name: string } }[] | null;
  firstAbility: string;
  weight: number;
  name: string;
  image_url: string;
  id: number;
}

export type { state, IPokeApiResponse };
