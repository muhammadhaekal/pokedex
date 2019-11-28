import * as React from "react";
import {
  Wrapper,
  PokemonNameText,
  TopInfoWrapper,
  TypesWrapper,
  PokemonType,
  PokemonImg,
  HorizontalLine
} from "./styled";
import { connect } from "react-redux";
import { fetchPokemonInfo } from "../../redux/actions/pokemonInfo";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../types/actions";
import { bindActionCreators } from "redux";
import { PokemonInfo } from "../../types/PokemonInfo";
import { AppState } from "../../redux/store";

export interface DetailInfoPageProps {}
export interface DetailInfoPageState {}
type Props = DetailInfoPageProps & IMapDispatchToProps & IMapStateToProps;

class DetailInfoPage extends React.Component<Props, DetailInfoPageState> {
  componentDidMount = () => {
    const { fetchPokemonInfo } = this.props;

    fetchPokemonInfo("bulbasaur");
  };

  render() {
    const {
      pokemonInfo: { name, types, sprites }
    } = this.props;

    return (
      <Wrapper>
        <TopInfoWrapper>
          <PokemonNameText>{name}</PokemonNameText>
          <PokemonImg src={sprites.front_default || ""}></PokemonImg>
          <TypesWrapper>
            {types.map((type, index) => (
              <PokemonType key={index}>{type.type.name}</PokemonType>
            ))}
          </TypesWrapper>
        </TopInfoWrapper>
        <HorizontalLine></HorizontalLine>
      </Wrapper>
    );
  }
}

interface IMapStateToProps {
  pokemonInfo: PokemonInfo;
}
const mapStateToProps = (store: AppState): IMapStateToProps => ({
  pokemonInfo: store.pokemonInfo.apiResponse
});

interface IMapDispatchToProps {
  fetchPokemonInfo: (pokemonName: string) => void;
}
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): IMapDispatchToProps => ({
  fetchPokemonInfo: bindActionCreators(fetchPokemonInfo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailInfoPage);
