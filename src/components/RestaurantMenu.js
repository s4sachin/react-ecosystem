import { React, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL_PREFIX, MENU_URL_SUFFIX } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const { name, cloudinaryImageId, avgRating, cuisines, sla } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h2 className="font-bold my-10 text-2xl">Restaurant {name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            categoryData={category?.card?.card}
            showItems={index === showIndex ? true : false} 
            setShowIndex={() =>setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
