import * as React from "react";
import { Wrapper, NameWrapper, PokemonImg } from "./styled";
import { PokemonInfo } from "../../types/PokemonList";
import { RequestStatus } from "../../types/RequestStatus";

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

  componentDidMount = () => {
    const { pokemonInfo } = this.props;
    fetch(`${pokemonInfo.url}`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("HTTP Status " + res.status + ", " + res.statusText);
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { pokemonInfo } = this.props;

    return (
      <Wrapper>
        <PokemonImg src={pokemonInfo.url}></PokemonImg>
        <NameWrapper>{pokemonInfo.name}</NameWrapper>
      </Wrapper>
    );
  }
}

export default PokemonCard;
