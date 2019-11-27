import { PokemonList } from "./PokemonList";

export interface SetPokemonListData {
  type: "SET_POKEMON_LIST_DATA";
  pokemonList: PokemonList;
}

export interface SetPageNumber {
  type: "SET_PAGE_NUMBER";
  pageNumber: number;
}

export type PokemonListActionTypes = SetPokemonListData | SetPageNumber;

export type AppActions = PokemonListActionTypes;
