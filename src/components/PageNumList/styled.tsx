import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

interface IPageNumberProps {
  isCurrentPage: boolean;
}

export const PageNumber = styled.div<IPageNumberProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid lightgrey;
  margin: 0 3px;
  border-radius: 3px;
  font-size: 20px;
  color: grey;
  cursor: pointer;
  ${(props: IPageNumberProps) =>
    props.isCurrentPage && "background-color: lightgray;"}
`;

export const PageNavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border: 1px solid lightgrey;
  margin: 0 3px;
  border-radius: 3px;
  font-size: 20px;
  color: grey;
  padding: 0 4px;
  cursor: pointer;
`;
