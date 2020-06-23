import React from 'react';
import { Link } from 'react-router-dom';

const GridView = ({
  restaurantItems,
  searchTerm,
  currentFilter,
  restaurantData,
}) => (
  <div className="row">
    {restaurantItems
      .filter(
        (restaurant) =>
          !restaurant ||
          restaurant.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      )
      .map((element, i) => {
        if(element) {

          const numItems = restaurantData.filter(
                       (x) => x[currentFilter] === element
                     );

                     return (
                       <div key={i} className="col-md-4">
                         <Link to={`/${currentFilter}/${element}`}>
                           <div className="card mb-4 ">
                             <div className="card-body">
                               <h4 className="card-title">{element}</h4>
                               <p className="card-text">
                                 {numItems.length} locations
                               </p>
                             </div>
                           </div>
                         </Link>
                       </div>
                     );

        }
        return false;

      })}
  </div>
);

export default GridView;
