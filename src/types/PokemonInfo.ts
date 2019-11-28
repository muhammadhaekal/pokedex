import { Type } from "./PokemonInfoResAPI";

export interface PokemonInfo {
  name: string;
  types: Type[];
  height: number;
  weight: number;
  stats: Status[];
}

export interface Status {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
