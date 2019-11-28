import { PokemonInfoActionTypes } from "./../../types/actions";
import { PokemonInfo } from "./../../types/PokemonInfo";

interface DefaultState {
  apiResponse: PokemonInfo;
}

const defaultState: DefaultState = {
  apiResponse: { name: "", types: [], height: 0, weight: 0, stats: [] }
};

const pokemonInfoReducer = (
  state = defaultState,
  action: PokemonInfoActionTypes
): DefaultState => {
  switch (action.type) {
    case "SET_POKEMON_DETAIL_INFO":
      return { ...state, apiResponse: action.pokemonInfo };
    default:
      return { ...state };
  }
};

export default pokemonInfoReducer;
