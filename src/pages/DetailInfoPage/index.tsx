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
import StatsInfo from "../../components/StatsInfo";
import { RouteComponentProps } from "react-router";

interface Params {
  pokemonName: string;
}

export interface DetailInfoPageProps {}
export interface DetailInfoPageState {}
type Props = DetailInfoPageProps &
  IMapDispatchToProps &
  IMapStateToProps &
  RouteComponentProps<Params>;

class DetailInfoPage extends React.Component<Props, DetailInfoPageState> {
  componentDidMount = () => {
    const {
      fetchPokemonInfo,
      match: {
        params: { pokemonName }
      }
    } = this.props;

    fetchPokemonInfo(pokemonName);
  };

  render() {
    const {
      pokemonInfo: { name, types, sprites, stats }
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
          <HorizontalLine></HorizontalLine>
          <StatsInfo stats={stats}></StatsInfo>
        </TopInfoWrapper>
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
