// src/components/SelectData.tsx
import { Select } from '@mantine/core';
import { useEffect, useState } from 'react';

interface SelectDataProps {
  options: string[];
  label?: string;
  placeholder?: string;
}

const SelectData = ({ options, label, placeholder }: SelectDataProps) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setData(options);
  }, [options]);

  return (
    <div>
      <Select
        label={label || "Label"}
        placeholder={placeholder || "Select"}
        searchable
        data={data}
         maxDropdownHeight={160}     
       
      />
    </div>
  );
};

export default SelectData;
