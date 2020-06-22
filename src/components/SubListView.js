import React from "react";
import {restaurantData} from '../data'
import { toCapitalize, urlify } from "../helpers";
import SubGridView from "./SubGridView";
import SubTableView from "./SubTableView";
import ButtonGroup from "./ButtonGroup";

const getUniqueItemsByFilter = (arr, filterType) => {
  return [...new Set(arr.map((x) => x[filterType]))];
};


class SubListView extends React.Component {
  constructor(props) {
    super(props);
    const currentCategory = props.match.params.category;
    const currentFilter = props.currentFilter;
    let filtered = restaurantData.filter(
      (x) => !x[currentFilter] || urlify(x[currentFilter]) === urlify(currentCategory)
    );

    this.state = {
      searchTerm: "",
      viewType: 'grid',
      currentFilter: props.currentFilter,
      filterID: currentCategory,
      restaurantItems: filtered,
    };
  }


  toggleView = (view) => {
    this.setState({viewType: view})
  }

  renderView(param) {
    switch(param) {
      case 'list':
        return <SubTableView {...this.state} restaurantData={restaurantData} />;
      case 'map':
        return <div>Coming Soon</div>
      case 'grid':
        return <SubGridView {...this.state} restaurantData={restaurantData} />
      default:
        return <SubGridView {...this.state} restaurantData={restaurantData} />;
    }
  }


  onPressFilter = (filterType) => {
    this.setState({
      restaurantItems: getUniqueItemsByFilter(restaurantData, filterType),
      currentFilter: filterType
    });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: String(e.target.value) });
  };

  render() {
    return (
      <div>
        <div className="row p-4">
          <div className="col-xs-4 col-md-4 mb-4">
            <input
              type="text"
              name="search"
              className="form-control text-left"
              onChange={this.handleChange}
              placeholder={`Search by name`}
            />
          </div>
          <div className="col-xs-3 offset-xs-3  col-md-3 offset-md-5  text-right">
            <ButtonGroup toggleView={this.toggleView} />
          </div>
        </div>

        <div className="row p-4">
          <div className="col-md-12">
            <h5>
              {toCapitalize(this.state.currentFilter)}:{" "}
              {toCapitalize(this.state.filterID.replace(/-/, " "))}
            </h5>
          </div>
        </div>

        <div className="p-4">{this.renderView(this.state.viewType)}</div>
      </div>
    );
  }
}

export default SubListView;