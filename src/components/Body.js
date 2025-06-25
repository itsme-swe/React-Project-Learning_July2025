import { RestaurantCard } from "./RestaurantCard";
import { restList } from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);
  return (
    <div className="body">
      <div className="filter">
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => {
                return res.info.avgRating > 4.5;
              }
            );
            setListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
