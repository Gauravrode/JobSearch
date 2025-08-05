import {
    ComboboxChevron,
    MultiSelect,
    Slider,
} from '@mantine/core';
import {
    IconBrain,
    IconBriefcase,
    IconMapPin,
    IconSearch,
} from '@tabler/icons-react';
import { useState } from 'react';
import {
    jobLocations,
    jobTitles,
    skills,
    talentNames,
} from '../Data/Data';



const SearchBar = () => {
  const [salary, setSalary] = useState<number>(50000);

  return (
    <div className="flex flex-wrap gap-6 px-4 py-6 rounded-lg shadow">

      <MultiSelect
        data={talentNames}
        placeholder="Search by talent name"
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
        data={jobLocations}
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
        data={jobTitles}
        placeholder="Select job titles"
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
        data={skills}
        placeholder="Select skills"
        searchable
        leftSection={
          <div className="text-yellow-400 p-1 bg-gray-600 rounded-full">
            <IconBrain size={16} />
          </div>
        }
        rightSection={<ComboboxChevron size="sm" />}
        classNames={{
          input: 'border border-gray-300 rounded px-2 py-2 h-[44px] min-h-[44px]',
        }}
      />

      <div className="w-full max-w-xs mt-2">
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

export default SearchBar;
