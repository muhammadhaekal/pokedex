import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../types/actions";
import { bindActionCreators } from "redux";
import { fetchPokemonList } from "../../redux/actions/pokemonList";
import { connect } from "react-redux";
import { Wrapper, CardWrapper, AppHeader } from "./styled";
import { PokemonInfo } from "../../types/PokemonList";
import { AppState } from "../../redux/store";
import PokemonCard from "../../components/PokemonCard";
import PageNumList from "../../components/PageNumList";
import FilterCard from "../../components/FilterCard";

export interface IHomePageProps {}
export interface IHomePageState {}
type Props = IHomePageProps & MapDispatchToProps & IMapStateToProps;

class App extends React.Component<Props, IHomePageState> {
  componentDidMount = () => {
    this.props.fetchPokemonList();
  };

  render() {
    const { pokemonList } = this.props;
    return (
      <Wrapper>
        <AppHeader>Pokedex HKL</AppHeader>

        <CardWrapper>
          {pokemonList &&
            pokemonList.map((pokemonInfo, index) => (
              <PokemonCard pokemonInfo={pokemonInfo} key={index}></PokemonCard>
            ))}
        </CardWrapper>

        <PageNumList></PageNumList>

        <FilterCard></FilterCard>
      </Wrapper>
    );
  }
}

interface IMapStateToProps {
  pokemonList: PokemonInfo[];
}

const mapStateToProps = (store: AppState): IMapStateToProps => ({
  pokemonList: store.pokemonList.apiResponse.results
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
