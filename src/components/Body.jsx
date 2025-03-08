import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [defaultRestaurantList, setDefaultRestaurantList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurants);
    setDefaultRestaurantList(restaurants);
    setFilteredRestaurants(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantList.length === 0 ? (
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
              const searchResult = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const filterRes = defaultRestaurantList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurants(filterRes);
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
              setFilteredRestaurants(defaultRestaurantList);
              setIsFiltered(false);
            }}
          >
            X
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((data) => (
          <ResCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
