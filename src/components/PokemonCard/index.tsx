import * as React from "react";
import { Wrapper, NameWrapper, PokemonImg, LoadingImg } from "./styled";
import { PokemonInfo } from "../../types/PokemonList";
import { RequestStatus } from "../../types/RequestStatus";
import { PokemonInfoResAPI } from "../../types/PokemonInfoResAPI";
import loadingCircleSrc from "../../images/loading-circle.gif";

export interface PokemonCardProps {
  pokemonInfo: PokemonInfo;
}

export interface PokemonCardState {
  front_default: string;
  detailInfoReqStatus: RequestStatus;
}

class PokemonCard extends React.Component<PokemonCardProps, PokemonCardState> {
  constructor(props: PokemonCardProps) {
    super(props);
    this.state = {
      front_default: "",
      detailInfoReqStatus: null
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
            front_default: res.sprites.front_default
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

  componentDidUpdate = (
    prevProps: PokemonCardProps,
    prevState: PokemonCardState
  ) => {
    const { pokemonInfo } = this.props;
    const prevPokemonInfo = prevProps.pokemonInfo;

    if (pokemonInfo.url !== prevPokemonInfo.url) {
      this.fetchPokemonImage();
    }
  };

  render() {
    const { pokemonInfo } = this.props;
    const { front_default, detailInfoReqStatus } = this.state;

    return (
      <Wrapper>
        {detailInfoReqStatus === "loading" ? (
          <LoadingImg src={loadingCircleSrc}></LoadingImg>
        ) : (
          <>
            <PokemonImg src={front_default}></PokemonImg>
            <NameWrapper>{pokemonInfo.name}</NameWrapper>
          </>
        )}
      </Wrapper>
    );
  }
}

export default PokemonCard;
