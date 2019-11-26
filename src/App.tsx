import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "./types/actions";
import { bindActionCreators } from "redux";
import { fetchPokemonList } from "./redux/actions/pokemonList";
import { connect } from "react-redux";

export interface AppProps {}
export interface AppState {}
type Props = AppProps & MapDispatchToProps;

class App extends React.Component<Props, AppState> {
  componentDidMount = () => {
    this.props.fetchPokemonList();
  };

  render() {
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, quaerat
        minima, adipisci suscipit pariatur ipsam eos laborum doloribus
        voluptatem illo veritatis commodi. Dolor itaque eum aperiam officiis
        architecto eos id?
      </div>
    );
  }
}

interface MapDispatchToProps {
  fetchPokemonList: () => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): MapDispatchToProps => ({
  fetchPokemonList: bindActionCreators(fetchPokemonList, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
