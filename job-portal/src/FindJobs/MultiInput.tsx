import { useState } from 'react';
import {
  ComboboxChevron,
  MultiSelect,
  Slider,
} from '@mantine/core';
import {
  IconSearch,
  IconMapPin,
  IconBriefcase,
  IconClock,
} from '@tabler/icons-react';

import {
  jobCategory,
  locations,
  experienceLevels,
  jobTypes,
} from '../Data/Data';

const MultiInput = () => {
  const jobTitles = Array.from(new Set(jobCategory.map((j) => j.title)));
  const [salary, setSalary] = useState<number>(50000);

  return (
    <div className="flex flex-wrap gap-20 items-start px-4 py-6 rounded-lg shadow">
      <MultiSelect
        label="Job Title"
        data={jobTitles}
        placeholder="Select job titles"
        searchable
        leftSection={
          <div className="text-yellow-400 p-1 bg-gray-600 rounded-full">
            <IconSearch size={16} />
          </div>
        }
        rightSection={<ComboboxChevron size="sm" />}
        classNames={{
          input: 'border border-gray-300 rounded px-2 py-2 h-[44px] min-h-[44px]',
        }}
      />

      <MultiSelect
        label="Location"
        data={locations}
        placeholder="Select locations"
        searchable
        leftSection={
          <div className="text-yellow-400 p-1 bg-gray-600 rounded-full">
            <IconMapPin size={16} />
          </div>
        }
        rightSection={<ComboboxChevron size="sm" />}
        classNames={{
          input: 'border border-gray-300 rounded px-2 py-2 h-[44px] min-h-[44px]',
        }}
      />

      <MultiSelect
        label="Experience"
        data={experienceLevels}
        placeholder="Select experience levels"
        searchable
        leftSection={
          <div className="text-yellow-400 p-1 bg-gray-600 rounded-full">
            <IconBriefcase size={16} />
          </div>
        }
        rightSection={<ComboboxChevron size="sm" />}
        classNames={{
          input: 'border border-gray-300 rounded px-2 py-2 h-[44px] min-h-[44px]',
        }}
      />

      <MultiSelect
        label="Job Type"
        data={jobTypes}
        placeholder="Select job types"
        searchable
        leftSection={
          <div className="text-yellow-400 p-1 bg-gray-600 rounded-full">
            <IconClock size={16} />
          </div>
        }
        rightSection={<ComboboxChevron size="sm" />}
        classNames={{
          input: 'border border-gray-300 rounded px-2 py-2 h-[44px] min-h-[44px]',
        }}
      />

      <div className="w-full max-w-xs">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Salary Range (₹)
        </label>
        <Slider
          value={salary}
          onChange={setSalary}
          min={0}
          max={200000}
          step={5000}
          label={(val) => `₹${val.toLocaleString()}`}
          color="yellow"
        />
      </div>
    </div>
  );
};

export default MultiInput;
