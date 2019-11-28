import * as React from "react";
import { Wrapper } from "./styled";

export interface DetailInfoPageProps {}

export interface DetailInfoPageState {}

class DetailInfoPage extends React.Component<
  DetailInfoPageProps,
  DetailInfoPageState
> {
  componentDidMount = () => {};

  render() {
    return <Wrapper>detail info page</Wrapper>;
  }
}

export default DetailInfoPage;
