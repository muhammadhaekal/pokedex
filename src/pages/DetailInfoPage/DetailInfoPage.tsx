import * as React from "react";
import { Wrapper } from "./styled";
import { connect } from "react-redux";
import { fetchPokemonInfo } from "../../redux/actions/pokemonInfo";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../types/actions";
import { bindActionCreators } from "redux";

export interface DetailInfoPageProps {}
export interface DetailInfoPageState {}
type Props = DetailInfoPageProps & IMapDispatchToProps;

class DetailInfoPage extends React.Component<Props, DetailInfoPageState> {
  componentDidMount = () => {
    const { fetchPokemonInfo } = this.props;

    fetchPokemonInfo("bulbasaur");
  };

  render() {
    return <Wrapper>detail info page</Wrapper>;
  }
}
interface IMapDispatchToProps {
  fetchPokemonInfo: (pokemonName: string) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): IMapDispatchToProps => ({
  fetchPokemonInfo: bindActionCreators(fetchPokemonInfo, dispatch)
});

export default connect(() => {}, mapDispatchToProps)(DetailInfoPage);
