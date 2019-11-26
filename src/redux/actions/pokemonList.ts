import { PokemonList } from "./../../types/PokemonList";
import { SetPokemonListData } from "../../types/actions";

export const setPokemonListData = (
  pokemonList: PokemonList
): SetPokemonListData => ({
  type: "SET_POKEMON_LIST_DATA",
  pokemonList
});
