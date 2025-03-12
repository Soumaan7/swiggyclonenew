import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const Resmenu = () => {
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const [menuInfo, setMenuInfo] = useState(null);

  const fetchMenu = async () => {
    const resInfo = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
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
          <li key={index}>
            Rs. {res.card.info.name}- Rs.
            {res.card.info.price / 100 || res.card.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
      {/* <h1>{itemCards[0].card.info.name}</h1>
      <h3>{costForTwoMessage}</h3> */}
    </div>
  );
};

export default Resmenu;
