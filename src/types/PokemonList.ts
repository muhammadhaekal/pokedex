export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  result: PokemonInfo[];
}

export interface PokemonInfo {
  name: string;
  url: string;
}
