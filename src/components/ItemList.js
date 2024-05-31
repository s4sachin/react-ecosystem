import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items?.map((item) => {
        return (
          <div key={item?.card?.info?.id}>
            <div>
              <span>{item?.card?.info?.name}</span>
              <span>{item?.card?.info?.price}</span>
            </div>
            <p>{<span>{item?.card?.info?.description}</span>}</p>
            <div>
              <img src={CDN_URL + item?.card?.info?.imageId}/>
              <button>Add + </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
