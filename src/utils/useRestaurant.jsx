import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurant = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const menuInfo = await fetch(MENU_API + resId);
    let jsonData = await menuInfo.json();
    console.log(jsonData);
    setMenuInfo(jsonData);
  };
  return menuInfo;
};
export default useRestaurant;
