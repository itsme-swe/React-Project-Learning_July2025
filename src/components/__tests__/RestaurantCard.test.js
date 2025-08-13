import { render, screen } from "@testing-library/react";
import { RestaurantCard } from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMockData.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with props data", () => {
  render(<RestaurantCard restData={MOCK_DATA} />);

  const name = screen.getByText("Subway");

  expect(name).toBeInTheDocument();
});
