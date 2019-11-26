import { PokemonListActionTypes } from "./../../types/actions";
import { PokemonList } from "./../../types/PokemonList";

const defaultState: PokemonList = {
  count: 0,
  next: "",
  previous: "",
  result: []
};

const pokemonListReducer = (
  state = defaultState,
  action: PokemonListActionTypes
): PokemonList => {
  switch (action.type) {
    case "SET_POKEMON_LIST_DATA":
      return { ...state, ...action.pokemonList };
    default:
      return { ...state };
  }
};

export default pokemonListReducer;
