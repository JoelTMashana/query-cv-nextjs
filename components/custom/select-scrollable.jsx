import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectScrollable = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const industryOptions = [
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "education", label: "Education" },
    { value: "retail", label: "Retail" },
    { value: "hospitality", label: "Hospitality" }
  ];
  
  const handleSelectionChange = (selectedOption) => {
    setSelectedValue(selectedOption);
  };

  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select an industry" value={selectedValue ? selectedValue.label : ''} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Industries</SelectLabel>
          {industryOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              onSelect={() => handleSelectionChange(option)}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectScrollable;
