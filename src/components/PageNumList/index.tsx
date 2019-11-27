import * as React from "react";
import { Wrapper, PageNumber } from "./styled";

export interface PageNumListProps {}

const PageNumList: React.SFC<PageNumListProps> = () => {
  return (
    <Wrapper>
      <PageNumber>1</PageNumber>
      <PageNumber>2</PageNumber>
      <PageNumber>3</PageNumber>
    </Wrapper>
  );
};

export default PageNumList;
