import JobCard from "./JobCard";
import Sort from "./Sort";
import { jobData } from "../Data/Data";
import { Link } from "react-router-dom";


const Jobs = () => {

  return (
    <div className="px-16 mt-10">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-semibold text-white">Recommended Jobs</div>
        <Sort />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobData.map((job, index) => (
          <Link to="/job-desc" state={job} key={index}>
            <JobCard {...job} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
