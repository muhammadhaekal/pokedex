import { PokemonList } from "./PokemonList";
import { PokemonInfo } from "./PokemonInfo";

export interface SetPokemonListData {
  type: "SET_POKEMON_LIST_DATA";
  pokemonList: PokemonList;
}

export interface SetPageNumber {
  type: "SET_PAGE_NUMBER";
  pageNumber: number;
}

export interface SetTypeFilter {
  type: "SET_TYPE_FILTER";
  typeFilter: string | null;
}

export type PokemonListActionTypes =
  | SetPokemonListData
  | SetPageNumber
  | SetTypeFilter;

export interface SetPokemonInfo {
  type: "SET_POKEMON_DETAIL_INFO";
  pokemonInfo: PokemonInfo;
}

export type PokemonInfoActionTypes = SetPokemonInfo;

export type AppActions = PokemonListActionTypes | PokemonInfoActionTypes;
