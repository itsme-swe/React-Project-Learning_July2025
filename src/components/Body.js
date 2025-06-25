import { RestaurantCard } from "./RestaurantCard";
import { restList } from "../utils/mockData";

export const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>

      <div className="restaurant-container">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
