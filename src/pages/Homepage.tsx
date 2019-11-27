import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { bindActionCreators } from "redux";
import { fetchPokemonList } from "../redux/actions/pokemonList";
import { connect } from "react-redux";
import { Wrapper, CardWrapper, AppHeader } from "./styled";
import { PokemonList } from "../types/PokemonList";
import { AppState } from "../redux/store";
import PokemonCard from "../components/PokemonCard";

export interface IAppProps {}
export interface IAppState {}
type Props = IAppProps & MapDispatchToProps & IMapStateToProps;

class App extends React.Component<Props, IAppState> {
  componentDidMount = () => {
    this.props.fetchPokemonList();
  };

  componentDidUpdate = () => {
    console.log(this.props.pokemonList);
  };

  render() {
    const { pokemonList } = this.props;
    return (
      <Wrapper>
        <AppHeader>Pokedex HKL</AppHeader>

        <CardWrapper>
          {pokemonList &&
            pokemonList.results.map((pokemonInfo, index) => (
              <PokemonCard pokemonInfo={pokemonInfo}></PokemonCard>
            ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

interface IMapStateToProps {
  pokemonList: PokemonList;
}

const mapStateToProps = (store: AppState): IMapStateToProps => ({
  pokemonList: store.pokemonList
});

interface MapDispatchToProps {
  fetchPokemonList: () => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): MapDispatchToProps => ({
  fetchPokemonList: bindActionCreators(fetchPokemonList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
