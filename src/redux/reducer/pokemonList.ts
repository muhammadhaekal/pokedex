import { PokemonListActionTypes } from "./../../types/actions";
import { PokemonList } from "./../../types/PokemonList";

interface DefaultState {
  apiResponse: PokemonList;
  offset: number;
  page: number;
  typeFilter: string | null;
}

const defaultState: DefaultState = {
  apiResponse: { count: 0, next: "", previous: "", results: [] },
  offset: 0,
  page: 1,
  typeFilter: null
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
    case "SET_TYPE_FILTER":
      return { ...state, typeFilter: action.typeFilter };
    default:
      return { ...state };
  }
};

export default pokemonListReducer;
