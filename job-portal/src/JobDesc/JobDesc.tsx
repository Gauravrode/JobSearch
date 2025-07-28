import React from "react";
import { ActionIcon, Button, Divider, Text } from "@mantine/core";
import {
    IconAdjustments,
    IconArrowLeft,
    IconBookmark,
    IconCurrencyDollar,
    IconBriefcase,
    IconMapPin,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

const JobDesc = () => {
    const { state: job } = useLocation();

    if (!job) {
        return (
            <div className="text-center text-white mt-10 text-xl">
                No job data available. Please go back and select a job.
            </div>
        );
    }

    const InfoBox = ({
        title,
        value,
        icon,
    }: {
        title: string;
        value: string;
        icon: React.ReactElement;
    }) => (
        <div className="flex flex-col items-center w-full">
            <ActionIcon
                className="!h-12 !w-12 text-yellow-400"
                variant="light"
                size="lg"
                radius="lg"
                aria-label={title}
            >
                {icon}
            </ActionIcon>
            <div className="text-sm text-gray-400">{title}</div>
            <div className="font-semibold">{value}</div>
        </div>
    );

    return (
        <div className="mx-3">
            <Link to="/find-jobs">
                <Button
                    variant="light"
                    size="lg"
                    className="m-3 text-lg font-semibold my-5"
                    style={{ width: "200px", height: "48px" }}
                >
                    <IconArrowLeft size={20} className="mr-3" /> Back
                </Button>
            </Link>

            <div className="flex items-center gap-3 justify-between">
                <img src={job.logo} alt="Company Logo" className="w-10 h-10 object-contain" />
                <div className="flex flex-col justify-center w-full ">
                    <div className="flex justify-between items-center mr-10">
                        <div className="text-lg font-semibold text-gray-200 truncate whitespace-nowrap overflow-hidden max-w-[160px]">
                            {job.title}
                            <div className="text-xs text-gray-300">
                                {job.company} · {job.applicants}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <Button
                                variant="light"
                                size="lg"
                                className="m-3 text-lg font-semibold my-5"
                                style={{ width: "150px", height: "40px" }}
                            >
                                Apply
                            </Button>
                            <IconBookmark size={30} className="text-yellow-500" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-4 gap-3 [&>div]:px-2 [&>div]:py-1 [&>div]:bg-gray-900 [&>div]:text-yellow-400 [&>div]:rounded-lg text-xs">
                <div>{job.level}</div>
                <div>{job.type}</div>
                <div>{job.location}</div>
            </div>

            <Divider size="xs" className="my-4" />

            <div className="flex gap-6 text-white my-10">
                <InfoBox title="Location" value={job.location} icon={<IconMapPin />} />
                <InfoBox title="Experience" value={job.level} icon={<IconBriefcase />} />
                <InfoBox title="Salary" value={job.salary} icon={<IconCurrencyDollar />} />
                <InfoBox title="Job Type" value={job.type} icon={<IconAdjustments />} />
            </div>



            <Divider size="xs" className="my-4" />

            {job.skills && job.skills.length > 0 && (
                <div className="mt-4">
                    <div className="text-white font-semibold mb-2">Skills:</div>
                    <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill: string, index: number) => (
                            <span
                                key={index}
                                className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}

                    </div>
                    <Divider size="xs" className="my-4" />
                    <div>
                        <div className="text-white font-semibold mb-2">Job Description : </div>
                        <div className="mt-2 mb-2">
                            <Text className="text-justify text-xs">{job.description}</Text>
                        </div>
                    </div>
                </div>
            )}

            <Divider size="xs" className="my-4" />

            <div >
                <div className="text-white font-semibold mb-2">About</div>
                <div className="flex items-center gap-3 justify-between">
                    <img src={job.logo} alt="Company Logo" className="w-10 h-10 object-contain" />
                    <div className="flex flex-col justify-center w-full ">
                        <div className="flex justify-between items-center mr-10">
                            <div className="text-lg font-semibold text-gray-200 truncate whitespace-nowrap overflow-hidden max-w-[160px]">
                                {job.title}
                                <div className="text-xs text-gray-300">
                                    4K+ Employees
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-center">
                                <Button
                                    variant="light"
                                    size="lg"
                                    className="m-3 text-lg font-semibold my-5"
                                    style={{ width: "200px", height: "40px" }}
                                >
                                    Company page
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDesc;
