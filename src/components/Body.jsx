import ResCard from "./ResCard";

import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRes(restaurants);
    setDefaultList(restaurants);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="filter">
          <button
            onClick={() => {
              const filterRes = listOfRes.filter(
                (res) => res.info.avgRating > 4.4
              );
              setListOfRes(filterRes);
              setIsFiltered(true);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <div
          className="default-list"
          style={{ display: isFiltered ? "block" : "none" }}
        >
          <button
            onClick={() => {
              setListOfRes(defaultList);
              setIsFiltered(false);
            }}
          >
            X
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRes.map((data) => (
          <ResCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
