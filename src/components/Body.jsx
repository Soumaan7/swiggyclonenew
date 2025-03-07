import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  const [defaultList] = useState(resList);
  const [isFiltered, setIsFiltered] = useState(false);
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
