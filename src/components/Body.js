import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res?.info?.avgRating >= 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((res) => {
          return <RestaurantCard resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;