import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";

interface JobCardProps {
  title: string;
  company: string;
  applicants: string;
  level: string;
  type: string;
  location: string;
  salary: string;
  postedAgo: string;
  logo: string;
  description: string;
}

const JobCard = ({
  title,
  company,
  applicants,
  level,
  type,
  location,
  salary,
  postedAgo,
  logo,
  description,
}: JobCardProps) => {
  return (
    <div className="w-72 h-60 rounded-xl p-3 bg-gray-800 shadow-sm transition duration-200 hover:shadow-yellow-400 hover:shadow-md">
      <div className="flex items-center gap-3 justify-between">
        <img
          src={logo}
          alt="Company Logo"
          className="w-10 h-10 object-contain"
        />
        <div className="flex flex-col justify-center w-full">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-200 truncate whitespace-nowrap overflow-hidden max-w-[160px]">
              {title}
            </div>
            <IconBookmark size={20} className="text-yellow-500" />
          </div>
          <div className="text-xs text-gray-300">
            {company} · {applicants}
          </div>
        </div>
      </div>

      <div className="flex mt-4 gap-3 [&>div]:px-2 [&>div]:py-1 [&>div]:bg-gray-900 [&>div]:text-yellow-400 [&>div]:rounded-lg text-xs">
        <div>{level}</div>
        <div>{type}</div>
        <div>{location}</div>
      </div>

      <div className="mt-2 mb-2">
        <Text className="text-justify text-xs" lineClamp={3}>
          {description}
        </Text>
      </div>

      <Divider size="xs" />

      <div className="flex justify-between px-2 mt-1">
        <div className="flex gap-1 items-center text-gray-200 text-sm">
          ₹{salary}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-300">
          <IconClockHour3 className="h-4 w-4" stroke={1.5} />
          {postedAgo}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
