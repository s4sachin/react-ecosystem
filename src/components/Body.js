import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const resList = useRestaurantList();

  useEffect(() => {
    if (resList) {
      const restaurants = resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    }
  }, [resList]);

  const handleSearch = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setSearchText("");
  };

  const handleFilterTopRated = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((res) => res?.info?.avgRating >= 4)
    );
  };

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
          <button type="button" className="" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((res) => {
          return (
            <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
              {res?.info?.promoted ? (
                <RestaurantCardPromoted resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;