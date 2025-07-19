import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header";
import { Body } from "./components/Body";

import About from "./components/About";
// import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "./components/Shimmer";

const InstaMart = lazy(() => import("./components/InstaMart")); // 🔸 this is how we do code splitting / Or we can say it's an dynamic import

const AppLayout = () => {
  return (
    <div className="app select-none">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
