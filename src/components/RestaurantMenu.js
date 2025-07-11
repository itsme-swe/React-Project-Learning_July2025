import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restId } = useParams();

  const restInfo = useRestaurantMenu(restId);

  if (restInfo === null) return <Shimmer />;

  const infoCards = restInfo?.cards?.find((card) => card?.card?.card?.info);

  const { name, cuisines, costForTwoMessage } =
    infoCards?.card?.card?.info || {};

  const regularCards = restInfo?.cards?.find(
    (c) => c.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuCard = regularCards?.find((c) => c.card?.card?.itemCards)?.card
    ?.card;

  const itemCards = menuCard?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
