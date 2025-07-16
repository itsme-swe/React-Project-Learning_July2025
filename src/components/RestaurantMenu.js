import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantAccordian from "./RestaurantAccordian";

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

  const categories =
    regularCards?.filter((c) => {
      const type = c.card?.card?.["@type"];
      return (
        type ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        type ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    }) || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>

      {categories.map((ctg) => (
        <RestaurantAccordian data={ctg.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
