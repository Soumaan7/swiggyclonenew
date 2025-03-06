import ResCard from "./ResCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div>
      <div className="search-container">Search</div>
      <div className="res-container">
        {resList.map((data) => (
          <ResCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
