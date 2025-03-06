import ResCard from "./ResCard";
import resList from "../utils/mockData";
let listOfRes = resList;
const Body = () => {
  return (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            listOfRes = listOfRes.filter((res) => res.info.avgRating > 4.5);
            console.log(listOfRes);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((data) => (
          <ResCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
