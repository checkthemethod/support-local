import React from "react";

const SubTableView = ({
  restaurantItems,
  searchTerm,
  restaurantData,
  currentFilter,
}) => (
  <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="text-nowrap">Restaurant</th>
          <th className="text-nowrap">Neighborhood</th>
          <th className="text-nowrap">Address</th>
          <th className="text-nowrap">Cuisine</th>
          <th className="text-nowrap">Service</th>
          <th className="text-nowrap">Instagram</th>
          <th className="text-nowrap">Phone Number</th>
          <th className="text-nowrap">Website</th>
          {/* <th className="text-nowrap">Merch/Online Store</th>
          <th className="text-nowrap">Gift Cards</th>
          <th className="text-nowrap">Other</th> */}
        </tr>
      </thead>
      <tbody>
        {restaurantItems.filter((restaurantItem) => {

          console.log(restaurantItem)
          return restaurantItem.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1})
           .map((restaurant) => (
          <tr>
            <td className="text-nowrap">{restaurant.title}</td>
            <td className="text-nowrap">{restaurant.neighborhood}</td>
            <td className="text-nowrap">{restaurant.address}</td>
            <td className="text-nowrap">{restaurant.cuisine}</td>
            <td className="text-nowrap">{restaurant.service}</td>
            <td className="text-nowrap">{restaurant.instagram}</td>
            <td className="text-nowrap">{restaurant.phone}</td>
            <td className="text-nowrap">{restaurant.website}</td>
            {/* <td className="text-nowrap">{restaurant.merch}</td>
            <td className="text-nowrap">{restaurant.gift_card}</td>
            <td className="text-nowrap">{restaurant.other}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SubTableView;
