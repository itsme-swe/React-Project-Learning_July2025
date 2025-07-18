import React from "react";
import AccordionItemList from "./AccordionItemList";

const RestaurantAccordion = ({ data }) => {
  const allItemCards = data?.categories
    ? data.categories.reduce(
        (acc, cat) => acc + (cat.itemCards?.length || 0),
        0
      )
    : data?.itemCards?.length || 0;

  const allItemList = data?.categories
    ? data.categories.flatMap(
        (ctg) => ctg.itemCards?.map((ele) => ele?.card?.info) || []
      )
    : data?.itemCards?.map((ele) => ele?.card?.info) || [];

  return (
    <div className="w-full md:w-8/12 mx-auto">
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 my-4 cursor-pointer transition-all duration-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-black-700 text-base md:text-lg">
            {data.title} ({allItemCards})
          </span>
          <span>⬇</span>
        </div>

        <AccordionItemList items={allItemList} />
      </div>
    </div>
  );
};

export default RestaurantAccordion;
