import * as React from "react";
import { Wrapper, PageNumber } from "./styled";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { fetchPokemonList } from "../../redux/actions/pokemonList";
import { AppActions } from "../../types/actions";

export interface IPageNumListProps {}
export interface IPageNumListState {
  pageNumbers: number[];
}

type Props = IPageNumListProps & IMapStateToProps & IMapDispatchToProps;

class PageNumList extends React.Component<Props, IPageNumListState> {
  state = {
    pageNumbers: []
  };

  static getDerivedStateFromProps(props: Props, state: IPageNumListState) {
    let startPageNumber = 0;
    if (props.page <= 3) {
      startPageNumber = 1;
    } else {
      startPageNumber = props.page - 2;
    }

    const newPageNumbers = [];

    for (let i = 0; i < 5; i++) {
      newPageNumbers.push(startPageNumber + i);
    }

    return {
      pageNumbers: newPageNumbers
    };
  }

  render() {
    const { pageNumbers } = this.state;
    const { fetchPokemonList, page } = this.props;
    return (
      <Wrapper>
        {pageNumbers &&
          pageNumbers.map((number, index) => (
            <PageNumber
              onClick={() => {
                fetchPokemonList(number);
              }}
              key={index}
              isCurrentPage={number === page}
            >
              {number}
            </PageNumber>
          ))}
      </Wrapper>
    );
  }
}
interface IMapStateToProps {
  page: number;
}

const mapStateToProps = (store: AppState): IMapStateToProps => ({
  page: store.pokemonList.page
});

interface IMapDispatchToProps {
  fetchPokemonList: (pageNumber: number) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): IMapDispatchToProps => ({
  fetchPokemonList: bindActionCreators(fetchPokemonList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PageNumList);
