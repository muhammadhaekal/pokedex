export interface PokemonInfoResAPI {
  id: number;
  height: number;
  name: string;
  sprites: Sprites;
  types: Type[];
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
