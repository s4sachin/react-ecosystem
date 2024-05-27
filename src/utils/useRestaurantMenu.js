import { MENU_URL_PREFIX, MENU_URL_SUFFIX } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    
    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch(MENU_URL_PREFIX + resId + MENU_URL_SUFFIX)
        const json = await data.json();
        setResInfo(json?.data);
    }

    return resInfo;
}

export default useRestaurantMenu;