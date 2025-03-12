import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Resmenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [menuInfo, setMenuInfo] = useState(null);
  const fetchMenu = async () => {
    const resInfo = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=10575&catalog_qa=undefined&submitAction=ENTER"
    );
    let jsonData = await resInfo.json();
    console.log(jsonData);
    setMenuInfo(jsonData);
  };
  if (menuInfo === null) return <Shimmer />;
  const { name, costForTwoMessage } =
    menuInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>MENU</h3>
      <ul>
        {itemCards.map((res, index) => (
          <li key={index}>{res.card.info.name}</li>
        ))}
      </ul>
      <h1>{itemCards[0].card.info.name}</h1>
      {/* <h3>{costForTwoMessage}</h3> */}
    </div>
  );
};

export default Resmenu;
