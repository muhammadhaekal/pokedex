import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 25%;
  position: relative;
`;

export const PokemonNameText = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: center;
`;

export const TopInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const PokemonType = styled.div`
  border: 1px solid lightgray;
  border-radius: 100px;
  display: inline-block;
  color: gray;
  margin: 2px 10px 2px 0px;
  padding: 5px;
  cursor: pointer;
`;

export const TypesWrapper = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

export const PokemonImg = styled.img`
  max-width: 30%;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
`;
