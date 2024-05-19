import RestaurantCard from "./RestaurantCard";
import {resList} from '../utils/constants'

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurant-container">
        {resList.map((res) => {
          return <RestaurantCard resData={res} key={res.info.id} />;
        })}
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} /> */}
      </div>
    </div>
  );
};

export default Body;