import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantAccordian from "./RestaurantAccordion";

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
  // const itemCards = menuCard?.itemCards || [];

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
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="border-b border-gray-300 pb-4 mb-6 select-none">
        <h1 className="text-3xl font-bold text-black-800 mb-2">{name}</h1>
        <p className="text-gray-600 text-sm font-bold mb-1">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-600 text-sm font-bold">{costForTwoMessage}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center select-none">
        ❀࿐ Menu ❀࿐
      </h2>

      <div className="space-y-4">
        {categories.map((ctg) => (
          <RestaurantAccordian
            key={ctg.card.card.title}
            data={ctg.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
