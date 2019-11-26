import { AppState } from "./../store";
import { AppActions } from "./../../types/actions";
import { PokemonList } from "./../../types/PokemonList";
import { SetPokemonListData } from "../../types/actions";
import { Dispatch } from "redux";

export const setPokemonListData = (
  pokemonList: PokemonList
): SetPokemonListData => ({
  type: "SET_POKEMON_LIST_DATA",
  pokemonList
});

export const fetchPokemonList = () => (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  fetch(`${process.env.REACT_APP_API_URL}/pokemon`, {
    method: "GET"
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("HTTP Status " + res.status + ", " + res.statusText);
      }
    })
    .then((res: PokemonList) => {
      dispatch(setPokemonListData(res));
    })
    .catch(err => {
      console.warn(err);
    });
};
