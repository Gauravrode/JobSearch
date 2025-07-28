import Jobs from "../FindJobs/Jobs";
import SearchJobs from "../FindJobs/SearchJobs";

const FindJobs = () => {
  return (
    <div className="h-[100vh]">
      <SearchJobs/> 
      <Jobs/>
    </div>
  );
};

export default FindJobs;
