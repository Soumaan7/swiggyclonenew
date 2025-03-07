import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(restaurants);
    setDefaultList(restaurants);
    setSearch(restaurants);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div style={{ display: "flex" }}>
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchResult = listOfRes.filter((res) =>
                res.info.name.includes(searchText)
              );
              setSearch(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const filterRes = defaultList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setSearch(filterRes);
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
              setSearch(defaultList);
              setIsFiltered(false);
            }}
          >
            X
          </button>
        </div>
      </div>

      <div className="res-container">
        {search.map((data) => (
          <ResCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
