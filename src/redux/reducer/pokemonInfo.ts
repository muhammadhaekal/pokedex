import { PokemonInfoActionTypes } from "./../../types/actions";
import { PokemonInfo } from "./../../types/PokemonInfo";

interface DefaultState {
  apiResponse: PokemonInfo;
}

const defaultState: DefaultState = {
  apiResponse: {
    name: "",
    types: [],
    height: 0,
    weight: 0,
    stats: [],
    sprites: {
      back_default: "",
      back_female: "",
      back_shiny: "",
      back_shiny_female: "",
      front_default: "",
      front_female: "",
      front_shiny: "",
      front_shiny_female: ""
    }
  }
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
