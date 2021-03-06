import pokemonList from "./reducer/pokemonList";
import pokemonInfo from "./reducer/pokemonInfo";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { compose } from "redux";
import { AppActions } from "../types/actions";

const rootReducer = combineReducers({
  pokemonList,
  pokemonInfo
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
);

export default store;
