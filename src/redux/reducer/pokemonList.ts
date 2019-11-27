import { PokemonListActionTypes } from "./../../types/actions";
import { PokemonList } from "./../../types/PokemonList";

interface DefaultState {
  apiResponse: PokemonList;
  offset: number;
  page: number;
}

const defaultState: DefaultState = {
  apiResponse: { count: 0, next: "", previous: "", results: [] },
  offset: 0,
  page: 1
};

const pokemonListReducer = (
  state = defaultState,
  action: PokemonListActionTypes
): DefaultState => {
  switch (action.type) {
    case "SET_POKEMON_LIST_DATA":
      return { ...state, apiResponse: action.pokemonList };
    case "SET_PAGE_NUMBER":
      return { ...state, page: action.pageNumber };
    default:
      return { ...state };
  }
};

export default pokemonListReducer;
