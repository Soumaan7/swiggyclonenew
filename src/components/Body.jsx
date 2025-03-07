import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  const [defaultList] = useState(resList);
  return (
    <div>
      <div>
        <div className="filter">
          <button
            onClick={() => {
              const filterRes = listOfRes.filter(
                (res) => res.info.avgRating > 4.4
              );
              setListOfRes(filterRes);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setListOfRes(defaultList);
            }}
          >
            X
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRes.map((data) => (
          <ResCard resData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
