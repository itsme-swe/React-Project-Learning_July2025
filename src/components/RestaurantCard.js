import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = restData?.info;

  const { deliveryTime } = restData?.info?.sla;

  return (
    <div data-testid="resCard" className="restaurant-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="rating-eta">
        <span className="star-icon">★</span> {avgRating}{" "}
        <span className="separator">•</span> {deliveryTime} mins
      </h4>
    </div>
  );
};

// 🔸 Higher Order Component
export const isPromotedLabelOnRestroCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
