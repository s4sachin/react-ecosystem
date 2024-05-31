import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({categoryData, showItems, setShowIndex}) => {
const handleClick = () => {
  setShowIndex();
}
  return (
    <div onClick={handleClick}>
      <div className="w-6/12 bg-grey-50 shadow-lg p-4">
        <span>
          {categoryData?.title}({categoryData?.itemCards?.length})
        </span>
      </div>
      {showItems && <ItemList items={categoryData?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
