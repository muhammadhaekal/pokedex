import * as React from "react";
import {
  Wrapper,
  NameWrapper,
  PokemonImg,
  LoadingImg,
  Overlay
} from "./styled";
import { PokemonInfo } from "../../types/PokemonList";
import { RequestStatus } from "../../types/RequestStatus";
import { PokemonInfoResAPI, Type } from "../../types/PokemonInfoResAPI";
import loadingCircleSrc from "../../images/loading-circle.gif";
import { AppState } from "../../redux/store";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";

export interface PokemonCardProps {
  pokemonInfo: PokemonInfo;
}

export interface PokemonCardState {
  front_default: string;
  detailInfoReqStatus: RequestStatus;
  types: Type[];
  isOverlayActive: boolean;
}

type Props = PokemonCardProps & IMapStateToProps & RouteComponentProps;

class PokemonCard extends React.Component<Props, PokemonCardState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      front_default: "",
      detailInfoReqStatus: null,
      types: [],
      isOverlayActive: false
    };
  }

  fetchPokemonImage = () => {
    const { pokemonInfo } = this.props;
    this.setState({ detailInfoReqStatus: "loading" });
    fetch(`${pokemonInfo.url}`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("HTTP Status " + res.status + ", " + res.statusText);
        }
      })
      .then((res: PokemonInfoResAPI) => {
        if (res && res.sprites && res.sprites.front_default) {
          this.setState({
            front_default: res.sprites.front_default,
            types: res.types
          });
        }
        this.setState({ detailInfoReqStatus: "success" });
      })
      .catch(err => {
        this.setState({ detailInfoReqStatus: "failed" });
        console.warn(err);
      })
      .finally(() => {
        this.setState({ detailInfoReqStatus: null });
      });
  };

  componentDidMount = () => {
    this.fetchPokemonImage();
  };

  componentDidUpdate = (prevProps: Props, prevState: PokemonCardState) => {
    const { pokemonInfo, typeFilter } = this.props;
    const { types } = this.state;
    const prevPokemonInfo = prevProps.pokemonInfo;
    const prevTypeFilter = prevProps.typeFilter;

    if (pokemonInfo.url !== prevPokemonInfo.url) {
      this.fetchPokemonImage();
    }

    if (typeFilter !== prevTypeFilter) {
      if (typeFilter === null) {
        this.setState({
          isOverlayActive: false
        });
        return;
      }

      const findTypes = types.find(type => {
        return type.type.name === typeFilter;
      });
      let newIsOverlayActive = true;

      if (findTypes) {
        newIsOverlayActive = false;
      }

      this.setState({
        isOverlayActive: newIsOverlayActive
      });
    }
  };

  render() {
    const {
      pokemonInfo,
      history: { push }
    } = this.props;
    const { front_default, detailInfoReqStatus, isOverlayActive } = this.state;

    return (
      <Wrapper
        onClick={() => {
          push(`/pokemon/${pokemonInfo.name}`);
        }}
      >
        {detailInfoReqStatus === "loading" ? (
          <LoadingImg src={loadingCircleSrc}></LoadingImg>
        ) : (
          <>
            <PokemonImg src={front_default}></PokemonImg>
            <NameWrapper>{pokemonInfo.name}</NameWrapper>
          </>
        )}
        {isOverlayActive && <Overlay></Overlay>}
      </Wrapper>
    );
  }
}

interface IMapStateToProps {
  typeFilter: string | null;
}

const mapStateToProps = (store: AppState): IMapStateToProps => ({
  typeFilter: store.pokemonList.typeFilter
});

export default connect(mapStateToProps, () => {})(withRouter(PokemonCard));
