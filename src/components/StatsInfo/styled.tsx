import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
`;

export const StatsTitleText = styled.div`
  font-weight: 900;
  font-size: 16px;
  text-align: center;
`;

export const StatName = styled.div`
  color: grey;
  width: 30%;
`;

export const StatInfoWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const StatBar = styled.div`
  align-self: stretch;
  border: 1px solid lightgray;
  border-radius: 200px;
  width: 70%;
  position: relative;
`;

interface IStatPrecentageBarProps {
  statValue: number;
}

export const StatPrecentageBar = styled.div<IStatPrecentageBarProps>`
  position: absolute;
  width: ${(props: IStatPrecentageBarProps) => props.statValue}%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: lightgray;
  border-radius: 200px;
`;
