import { fireEvent, render, screen } from "@testing-library/react";
import { Body } from "../Body";
import "@testing-library/jest-dom";
import { mockFetch } from "../mocks/dummyFetchFunction";
import MOCK_DUMMY_DATA from "../mocks/mockDummyFetchData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

it("Should search Restaurant List for burger text input", async () => {
  mockFetch(MOCK_DUMMY_DATA);

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(2);
});
