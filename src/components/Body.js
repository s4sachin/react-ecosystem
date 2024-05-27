import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     RESTAURANT_LIST_URL
  //   );

  //   const json = await data.json();

  //   setListOfRestaurants(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurants(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

    const resList = useRestaurantList();
    console.log(resList);
    setListOfRestaurants(resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
    setFilteredRestaurants(resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );


  return !listOfRestaurants ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="search food.."
          ></input>
          <button
            type="button"
            className=""
            onClick={() => {
              //Filter the restaurants by search string.
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurants.map((res) => {
          return (
            <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;