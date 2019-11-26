import { PokemonList } from "./PokemonList";

export interface SetPokemonListData {
  type: "SET_POKEMON_LIST_DATA";
  pokemonList: PokemonList;
}

export type PokemonListActionTypes = SetPokemonListData;
export type AppActions = PokemonListActionTypes;
