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
    <div className="flex flex-wrap gap-6 px-4 py-6 rounded-lg shadow">
      <div className="flex-1 min-w-[250px] max-w-sm">
        <MultiSelect
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
      </div>

      <div className="flex-1 min-w-[250px] max-w-sm">
        <MultiSelect
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
      </div>

      <div className="flex-1 min-w-[250px] max-w-sm">
        <MultiSelect
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
      </div>

      <div className="flex-1 min-w-[250px] max-w-sm">
        <MultiSelect
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
      </div>

      <div className="w-full max-w-sm mt-2">
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
