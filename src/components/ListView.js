import React from 'react';

import { restaurantData } from "../data";
import TableView from './TableView';
import GridView from './GridView';
import { toCapitalize } from '../helpers';
import ButtonGroup from './ButtonGroup';




const getUniqueItemsByFilter = (arr, filterType) => {
   return [...new Set(arr.map(x => x[filterType]))]
}


class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      currentFilter: 'neighborhood',
      viewType: 'grid',
      restaurantItems: getUniqueItemsByFilter(restaurantData, 'neighborhood')
    }


  }


  onPressFilter = (filterType) => {
    this.setState({
      restaurantItems:
      getUniqueItemsByFilter(restaurantData, filterType),
    currentFilter: filterType}
    );
  }

  handleChange = (e) => {
    console.log('search term is: ' + e.target.value)
    this.setState({searchTerm: String(e.target.value)})
  }

  toggleView = (view) => {
    this.setState({viewType: view})
  }

  renderView(param) {
    switch(param) {
      case 'list':
        return <TableView {...this.state} restaurantData={restaurantData} />;
      case 'map':
        return <div>Coming Soon</div>
      case 'grid':
        return <GridView {...this.state} restaurantData={restaurantData} />
      default:
        return <GridView {...this.state} restaurantData={restaurantData} />;
    }
  }

  render() {
    return (
      <div>
        <div className="row p-4">
          <div className="col-md-12 text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.onPressFilter("neighborhood")}
              >
                Neighborhood
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.onPressFilter("cuisine")}
              >
                Cuisine Type
              </button>
            </div>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-md-4">
            <input
              type="text"
              name="search"
              className="form-control text-left"
              onChange={this.handleChange}
              placeholder={`Search ${this.state.currentFilter}`}
            />
          </div>
          <div className="offset-md-5 col-md-3 text-right">
            <ButtonGroup toggleView={this.toggleView} />
          </div>
        </div>

        <div className="row p-4">
          <div className="col-md-12">
            <h5>
              {toCapitalize(this.state.currentFilter)} (
              {this.state.restaurantItems.length})
            </h5>
          </div>
        </div>
        <div className="p-4">{this.renderView(this.state.viewType)}</div>
      </div>
    );
  }
}

export default ListView;