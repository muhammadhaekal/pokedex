import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 10%;
  top: 52px;
  width: 13%;
  padding: 3px;
`;

interface FilterKeyWrapperProps {
  isSelected: boolean;
}

export const FilterKeyWrapper = styled.div<FilterKeyWrapperProps>`
  border: 1px solid lightgray;
  border-radius: 100px;
  display: inline-block;
  color: gray;
  margin: 2px 3px 2px 0px;
  padding: 3px;
  cursor: pointer;
  ${(props: FilterKeyWrapperProps) =>
    props.isSelected && "background-color: lightgray;"}
`;

export const ClearButton = styled.div`
  width: 100%;
  color: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  background-color: gray;
  text-align: center;
  margin-top: 6px;
  cursor: pointer;
`;
