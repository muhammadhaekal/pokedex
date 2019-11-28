import * as React from "react";
import { Wrapper, FilterKeyWrapper, ClearButton } from "./styled";
import { PokemonTypesResAPI } from "../../types/PokemonTypesResAPI";
import { RequestStatus } from "../../types/RequestStatus";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../types/actions";
import { bindActionCreators } from "redux";
import { setTypeFilter } from "../../redux/actions/pokemonList";
import { connect } from "react-redux";
import { FilterHeaderText } from "../PokemonCard/styled";
import { AppState } from "../../redux/store";

export interface FilterCardProps {}

export interface FilterCardState {
  filters: string[];
  getFiltersReqStatus: RequestStatus;
}

class FilterCard extends React.Component<
  FilterCardProps & IMapDispatchToProps & IMapStateToProps,
  FilterCardState
> {
  state = {
    filters: [],
    getFiltersReqStatus: null
  };

  componentDidMount = () => {
    fetch(`${process.env.REACT_APP_API_URL}/type`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("HTTP Status " + res.status + ", " + res.statusText);
        }
      })
      .then((res: PokemonTypesResAPI) => {
        if (res && res.results) {
          const newFilters = res.results.map(result => {
            return result.name;
          });
          this.setState({
            filters: newFilters,
            getFiltersReqStatus: "success"
          });
        }
      })
      .catch(err => {
        this.setState({ getFiltersReqStatus: "failed" });
        console.warn(err);
      })
      .finally(() => {
        this.setState({ getFiltersReqStatus: null });
      });
  };

  render() {
    const { filters } = this.state;
    const { setTypeFilter, typeFilter } = this.props;

    return (
      <Wrapper>
        <FilterHeaderText>Pokemon Type</FilterHeaderText>
        {filters.map((filter: string, index: number) => (
          <FilterKeyWrapper
            isSelected={filter === typeFilter}
            onClick={() => {
              setTypeFilter(filter);
            }}
            key={index}
          >
            {filter}
          </FilterKeyWrapper>
        ))}
        <ClearButton
          onClick={() => {
            setTypeFilter(null);
          }}
        >
          clear filter
        </ClearButton>
      </Wrapper>
    );
  }
}

interface IMapStateToProps {
  typeFilter: string | null;
}

const mapStateToProps = (store: AppState): IMapStateToProps => ({
  typeFilter: store.pokemonList.typeFilter
});

interface IMapDispatchToProps {
  setTypeFilter: (typeFilter: string | null) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): IMapDispatchToProps => ({
  setTypeFilter: bindActionCreators(setTypeFilter, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCard);
