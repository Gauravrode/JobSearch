import { Button, Divider } from "@mantine/core";
import { IconArrowLeft, IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { experienceData } from "../Data/Data";
import CertiCard from "../TalentProfile/CertiCard";
import ExpCard from "../TalentProfile/ExpCard";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfile = () => {
    return (
        <div>
             <Link to="/find-talent">
            <Button
                variant="light"
                size="lg"
                className="m-3 text-lg font-semibold "
                style={{ width: "200px", height: "48px" }}
            >
               <IconArrowLeft size={20} className="mr-3"/> Back
            </Button>
            </Link>

            <div className="flex">
                <div>
                    <div className="h-[150vh] w-[98%] m-3">
                        <div className="relative">
                            <img
                                className="rounded-t-2xl h-[30vh] w-full object-cover"
                                src="./banner.jpg"
                                alt="img"
                            />
                            <img
                                className="w-48 h-48 rounded-full bg-yellow-700 absolute -bottom-24 left-3 border-4 border-gray-900"
                                src="./avatar.png"
                                alt="img"
                            />
                        </div>

                        <div className="mt-28 px-4 flex items-center justify-between">
                            <div className="text-xl font-semibold text-white">Jarrod Wood</div>
                            <Button variant="light">Message</Button>
                        </div>

                        <div className="flex px-2 gap-2 text-lg items-center">
                            <IconBriefcase />
                            Software Engineer • Google
                        </div>
                        <div className="flex px-2 gap-2">
                            <IconMapPin />
                            New York, United States
                        </div>

                        <div className="my-6">
                            <Divider size="xs" />
                        </div>

                        <div className="px-3">
                            <div className="text-xl font-semibold text-gray-100">About</div>
                            <div className="text-gray-300 text-sm mt-2 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                                dignissimos suscipit corporis. Sunt odio veritatis eius optio
                                placeat aliquid modi natus, dolor quia facere consequuntur
                                repudiandae.
                            </div>
                        </div>

                        <div className="my-6">
                            <Divider size="xs" />
                        </div>

                        <div className="px-3">
                            <div className="text-xl font-semibold text-gray-100">Skills</div>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-yellow-400 text-sm font-medium bg-opacity-15 rounded-3xl text-yellow-500 px-3 py-1 my-3">
                                    React
                                </div>
                                <div className="bg-yellow-400 text-sm font-medium bg-opacity-15 rounded-3xl text-yellow-500 px-3 py-1 my-3">
                                    Node.js
                                </div>
                                <div className="bg-yellow-400 text-sm font-medium bg-opacity-15 rounded-3xl text-yellow-500 px-3 py-1 my-3">
                                    MongoDB
                                </div>
                            </div>
                        </div>

                        <div className="my-6">
                            <Divider size="xs" />
                        </div>

                        <div className="px-3">
                            <div className="text-xl font-semibold text-gray-100">Experience</div>
                            <div className="flex flex-col gap-4 mt-2">
                                {experienceData.map((exp, index) => (
                                    <ExpCard
                                        key={index}
                                        title={exp.title}
                                        company={exp.company}
                                        location={exp.location}
                                        date={exp.date}
                                        logo={exp.logo}
                                        description={exp.description}
                                    />

                                ))}
                            </div>
                        </div>

                        <div className="my-6">
                            <Divider size="xs" />
                        </div>

                        <div>
                            <div className="text-xl font-semibold text-gray-100">Certifications</div>
                            <div> <CertiCard /></div>
                        </div>

                    </div>
                </div >
                <div className="">
                    <RecommendTalent />
                </div>
            </div>
        </div>
    );
};

export default TalentProfile;
