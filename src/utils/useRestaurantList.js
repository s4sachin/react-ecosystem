import { useEffect, useState } from 'react';
import {RESTAURANT_LIST_URL} from '../utils/constants'

const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    useEffect(() => {
        fetchListData();
    }, []);


    const fetchListData = async() => {
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        setListOfRestaurants(json)
    }
    return listOfRestaurants;
}


export default useRestaurantList;