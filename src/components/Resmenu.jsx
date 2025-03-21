import React from "react";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Resmenu = () => {
  const { resId } = useParams();
  const menuInfo = useRestaurant(resId);

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
