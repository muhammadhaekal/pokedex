import { AppState } from "./../store";
import { SetPokemonInfo, AppActions } from "./../../types/actions";
import { PokemonInfo } from "../../types/PokemonInfo";
import { Dispatch } from "react";

export const setPokemonInfo = (pokemonInfo: PokemonInfo): SetPokemonInfo => ({
  type: "SET_POKEMON_DETAIL_INFO",
  pokemonInfo
});

export const fetchPokemonInfo = (pokemonName: string) => (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  console.log(`${process.env.REACT_APP_API_URL}/pokemon/${pokemonName}`);
  fetch(`${process.env.REACT_APP_API_URL}/pokemon/${pokemonName}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("HTTP Status " + res.status + ", " + res.statusText);
      }
    })
    .then((res: any) => {
      dispatch(setPokemonInfo(res));
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
