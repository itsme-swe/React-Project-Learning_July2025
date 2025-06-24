import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s.cafebazaar.ir/images/icons/com.ubercab.eats-607c0b4f-4604-4ce3-9529-925c09474830_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize"
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = restData?.info;

  const { deliveryTime } = restData?.info?.sla;

  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
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

const restList = [
  {
    info: {
      id: "261286",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c6f56042-c8df-4b00-8fa3-31fed7a7eeb9_261286.jpg",
      locality: "Sector 10",
      areaName: "Malviya Nagar",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.7",
      totalRatingsString: "6.2K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "859447",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/56bc981c-addc-453a-b32f-50adcf7b94e9_859447.JPG",
      locality: "Vidhyadhar Nagar",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "229",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "580288",
      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/a581548e-fd76-4437-8297-af3a77ae2c35_580288.jpg",
      locality: "MALVIYA NAGAR",
      areaName: "Sector 7",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.2,
      veg: true,
      parentId: "506176",
      avgRatingString: "4.2",
      totalRatingsString: "517",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "61560",
      name: "Bombay Mishthan Bhandar (Bmb) - Durapura",
      cloudinaryImageId: "127d6d2a1a4f3e995fba2c5dd93b574f",
      locality: "Durgapura",
      areaName: "Durgapura",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Thalis", "Rajasthani"],
      avgRating: 4.6,
      veg: true,
      parentId: "13662",
      avgRatingString: "4.6",
      totalRatingsString: "95K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "202795",
      name: "Chhabra's Pure Veg",
      cloudinaryImageId: "zixvp4a1bl1otsg5zzqi",
      locality: "Sector 4",
      areaName: "G.T ",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "Indian",
        "Punjabi",
        "Snacks",
        "Rajasthani",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "230551",
      avgRatingString: "4.5",
      totalRatingsString: "7.4K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "44502",
      name: "Tan-Sukh By Kanha",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/0a24d9d3-0619-4de5-a9bf-edeafa21280f_44502.jpg",
      locality: "Malviya Nagar ",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "South Indian",
        "Chinese",
        "American",
      ],
      avgRating: 4.5,
      parentId: "231081",
      avgRatingString: "4.5",
      totalRatingsString: "9.1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "446098",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "tghyeph9pzj5wcfnnbt5",
      locality: "Lal Bahadur Nagar",
      areaName: "Malviya Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "4961",
      avgRatingString: "4.1",
      totalRatingsString: "6.4K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "287707",
      name: "Cakes By Flower Aura",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/475ce7dc-842d-484c-8670-77953855d044_287707.jpg",
      locality: "Sector 12",
      areaName: "Malviya Nagar",
      costForTwo: "₹700 for two",
      cuisines: ["Bakery"],
      avgRating: 4,
      veg: true,
      parentId: "472407",
      avgRatingString: "4.0",
      totalRatingsString: "22",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "45913",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/fb1c8b7f-84ac-4fa9-a4cc-dbeb5f9fb5d8_45913.jpg",
      locality: "Crystal Court Mall",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "528813",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/14bdb13d-f77c-4373-b10b-d2644bf82742_528813.JPG",
      locality: "Sumer Nagar Ext",
      areaName: "Vill-Balrampura URF Khejdoon",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.7,
      parentId: "3818",
      avgRatingString: "4.7",
      totalRatingsString: "9.3K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 6.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "565291",
      name: "Wendy's Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/25214643-bc75-46f3-804a-a71242622234_565291.JPG",
      locality: "RIICO Industrial Area",
      areaName: "Sanganer",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
      avgRating: 4.2,
      parentId: "972",
      avgRatingString: "4.2",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },

  {
    info: {
      id: "45967",
      name: "Burger Farm",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_45967.jpg",
      locality: "JLN Marg",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "American",
        "Continental",
        "Italian-American",
        "Snacks",
        "Grill",
      ],
      avgRating: 4.4,
      parentId: "4660",
      avgRatingString: "4.4",
      totalRatingsString: "59K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },

  {
    info: {
      id: "822922",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/8585bbe1-7d59-4c03-b5c7-0b5353bfc633_822922.JPG",
      locality: "SECTOR-7",
      areaName: "MALVIYA NAGAR",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },

  {
    info: {
      id: "677823",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Jagatpura",
      areaName: "Jagatpura",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },

  {
    info: {
      id: "45605",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/27133f8b-5942-4578-817f-61e2d1312ddb_45605.JPG",
      locality: "Malviya Nagar",
      areaName: "Malviya Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4,
      parentId: "2456",
      avgRatingString: "4.0",
      totalRatingsString: "21K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "750687",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ce96a7a1-1eb4-4294-943b-6d910f5016b7_750687.JPG",
      locality: "Model Town",
      areaName: "Jaipur Textile Market",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "47598",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/f7ebe3af-ce6a-4f53-a80b-c50150775319_47598.JPG",
      locality: "GT Central",
      areaName: "Malviya Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },

  {
    info: {
      id: "45175",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/6041f86e-d9be-4961-b99b-77e36c34f7ba_45175.jpg",
      locality: "GT Central",
      areaName: "Malviya Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "53K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },

  {
    info: {
      id: "491141",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/c5bac24d-b4b2-4f31-863b-9a18472d3fbc_491141.JPG",
      locality: "Jaipur WTP Mall",
      areaName: "Malviya Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "3.1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
];

const Body = () => {
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AppLayout />
  </>
);
