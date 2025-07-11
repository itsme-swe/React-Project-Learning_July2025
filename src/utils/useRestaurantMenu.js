import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (restId) => {
  const [restInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + restId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return restInfo;
};

export default useRestaurantMenu;

/*
🌟 This is a custom React hook that helps us to fetch restaurant menu details from an API and use it inside our React RestaurantMenu components easily.

  This hook is like a helper function that:

  - Asks for restaurant ID.

  - Brings us the restaurant’s menu.

  - Hands it to our RestaurantMenu component.
*/
