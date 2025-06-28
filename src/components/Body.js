import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8343906&lng=75.8123567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // 🌟 clubed conditional rendering with return statement
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => {
                return res.info.avgRating > 4.2;
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
