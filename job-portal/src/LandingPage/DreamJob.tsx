import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';

const DreamJob = () => {
  return (
    <div className="flex items-center px-20 mx-20 pb-20">

      <div className="flex flex-col gap-5 w-[45%] leading-tight">
        <div className="text-6xl font-bold text-yellow-100 [&>span]:text-yellow-500">
          Find Your <span>Dream</span> <span>Job</span> with us
        </div>
        <div className="text-lg text-gray-600">
          Good life begins with a good company. Start exploring thousands of jobs in one place.
        </div>
        <div className="flex gap-3 items-end">
          <TextInput
            leftSectionPointerEvents="none"
            label="Job Title"
            placeholder="Software Engineer"
            className="text-gray-300"
          />
          <TextInput
            leftSectionPointerEvents="none"
            label="Job Type"
            placeholder="Full Time"
            className="text-gray-300"
          />
          <div className="bg-yellow-500 p-2 rounded text-white mt-5 cursor-pointer">
            <IconSearch stroke={2.5} />
          </div>
        </div>
      </div>


      <div className="w-[70%] flex flex-col items-center justify-center relative">
        <img
          src="/BoyPng.png"
          alt=""
          className="h-[30rem] w-100 object-cover"
        />


        <div className="mt-4 items-start border-yellow-400 border rounded-lg p-2 backdrop-blur-md mr-20 absolute right-1">
          <div className="pl-3 pt-2 text-gray-300" >10k+ got jobs </div>
          <Avatar.Group>
            <Avatar src="image.png" />
            <Avatar src="image.png" />
            <Avatar src="image.png" />
            <Avatar>9k</Avatar>
          </Avatar.Group>

        </div>
      </div>
    </div>
  );
};

export default DreamJob;
