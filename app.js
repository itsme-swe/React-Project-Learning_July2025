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

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c6f56042-c8df-4b00-8fa3-31fed7a7eeb9_261286.jpg"
        alt="res-logo"
      />
      <h4>NIC Ice Creams</h4>
      <h4>Ice Cream, Desserts</h4>
      <h4 className="rating-eta">
        <span className="star-icon">★</span> 4.5{" "}
        <span className="separator">•</span> 38 mins
      </h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
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
