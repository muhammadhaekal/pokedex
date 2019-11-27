import styled from "styled-components";

export const Wrapper = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin-top: 10px;
  position: relative;
  height: 180px;
`;

export const NameWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  width: 90%;
  text-align: center;
  margin: 0 auto;
  border-radius: 3px;
  background-color: lightgrey;
  color: grey;
`;

export const PokemonImg = styled.img`
  max-width: 100%;
`;

export const LoadingImg = styled.img`
  max-width: 50%;
`;
