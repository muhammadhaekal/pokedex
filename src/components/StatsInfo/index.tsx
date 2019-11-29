import * as React from "react";
import { Status } from "../../types/PokemonInfo";
import {
  Wrapper,
  StatsTitleText,
  StatInfoWrapper,
  StatName,
  StatBar,
  StatPrecentageBar
} from "./styled";

export interface IStatsInfoProps {
  stats: Status[];
}

const StatsInfo: React.SFC<IStatsInfoProps> = ({ stats }) => {
  return (
    <Wrapper>
      <StatsTitleText>Status Info</StatsTitleText>
      {stats.map((stat, index) => (
        <StatInfoWrapper key={index}>
          <StatName>{stat.stat.name}</StatName>
          <StatBar>
            <StatPrecentageBar statValue={50}></StatPrecentageBar>
          </StatBar>
        </StatInfoWrapper>
      ))}
    </Wrapper>
  );
};

export default StatsInfo;
