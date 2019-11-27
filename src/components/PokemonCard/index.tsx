import * as React from "react";
import { Wrapper, NameWrapper, PokemonImg } from "./styled";
import { PokemonInfo } from "../../types/PokemonList";
import { RequestStatus } from "../../types/RequestStatus";
import { PokemonInfoResAPI } from "../../types/PokemonInfoResAPI";

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
        console.log(res.sprites.front_default);
      })
      .catch(err => {
        console.warn(err);
      });
  };

  componentDidMount = () => {
    this.fetchPokemonImage();
  };

  componentDidUpdate = () => {
    this.fetchPokemonImage();
  };

  render() {
    const { pokemonInfo } = this.props;
    const { front_default } = this.state;

    return (
      <Wrapper>
        <PokemonImg src={front_default}></PokemonImg>
        <NameWrapper>{pokemonInfo.name}</NameWrapper>
      </Wrapper>
    );
  }
}

export default PokemonCard;
