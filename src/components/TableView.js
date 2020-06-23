import React from 'react';
import { Link } from 'react-router-dom';

const TableView = ({restaurantItems, searchTerm, restaurantData, currentFilter}) => (<table className="table table-striped">
  <thead>
    <tr>
    <th>Neighborhood</th>
    <th>Total</th>
    </tr>
  </thead>
  <tbody>

      {restaurantItems
               .filter(
                 (restaurant) =>
                   !restaurant || restaurant
                     .toLowerCase()
                     .indexOf(searchTerm.toLowerCase()) > -1
               )
               .map((element, i) => {
                 if(element) {
                   const numItems = restaurantData.filter(
                     (x) => x[currentFilter] === element
                   );
                   return (
                     <tr key={i}>
                       <td>
                         <Link to={`/${currentFilter}/${element}`}>
                           {element}
                         </Link>
                       </td>
                       <td>{numItems.length}</td>
                     </tr>
                   );

                 }
                 return false;
               })
      }

  </tbody>
</table>);

export default TableView;
