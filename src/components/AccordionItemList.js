import React from "react";
import { CDN_URL } from "../utils/constants";

const AccordionItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 m-2 border-gray-200 border-b-2 text-left flex items-start justify-between"
        >
          <div className="flex-1 pr-4">
            <div className="py-1">
              <span className="text-base font-medium text-gray-800">
                {item.name}
              </span>
              <span className="text-sm text-gray-600 font-bold ml-2">
                ₹{Math.round((item.price ?? item.defaultPrice ?? 0) / 100)}
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1">{item.description}</p>
          </div>

          {item.imageId && (
            <div className="ml-auto relative w-20 h-24">
              <img
                src={CDN_URL + item.imageId}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <button className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white text-green-600 font-semibold text-sm px-2 py-0.5 rounded shadow-md flex items-center gap-1 border border-green-600 hover:bg-green-50 cursor-pointer">
                <span>Add</span>
                <span className="text-lg leading-none">+</span>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionItemList;
