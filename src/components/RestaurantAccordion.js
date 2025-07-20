import React, { useState } from "react";
import AccordionItemList from "./AccordionItemList";

const RestaurantAccordion = ({ data, showAccordionList, setShowIndex }) => {
  {
    /* Toggling feature of accordion list */
  }
  const handleClick = () => {
    setShowIndex();
  };

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
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 my-4  transition-all duration-200">
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={handleClick}
        >
          <span className="font-semibold text-black-700 text-base md:text-lg">
            {data.title} ({allItemCards})
          </span>
          <span className="text-3xl">🠻</span>
        </div>

        {showAccordionList && <AccordionItemList items={allItemList} />}
      </div>
    </div>
  );
};

export default RestaurantAccordion;
