

import { talentData } from "../Data/Data";
import Sort from "../FindJobs/Sort";
import SearchBar from "../FindTalent/SearchBar";
import TalentCard from "../FindTalent/TalentCard";

const FindTalent = () => {
    return (
        <div className="p-6 space-y-6 justify-between ">
            <SearchBar />
            <div className="flex justify-between items-center my-6 mx-10">
                <div className="text-2xl font-semibold text-white">Talents</div>
                <Sort />
            </div>

            <div className="flex flex-wrap gap-4 ">
                {talentData.map((talent, index) => (
                    <TalentCard key={index} {...talent} />
                ))}
            </div>
        </div>
    );
};

export default FindTalent;
