export interface PokemonTypesResAPI {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonTypeInfo[];
}

export interface PokemonTypeInfo {
  name: string;
  url: string;
}
