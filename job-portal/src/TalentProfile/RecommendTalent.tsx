import { Divider } from "@mantine/core";
import { talentData } from "../Data/Data";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = () => {


    return (<>

        <div className="my-3 ">
            <div className="text-3xl text-semibold text-gray-100 my-6 mx-3">
                Recommended Talents
            </div>
            <div className="my-6">
                                <Divider size="xs" />
                            </div>
            <div className="">
                {talentData.map((talent, index) => index<4 && (
                    <TalentCard
                        key={index}
                        {...talent}
                        className="w-full md:w-[380px] h-50 my-5" 
                    />
                ))}

            </div>
        </div>



    </>);
}
export default RecommendTalent;