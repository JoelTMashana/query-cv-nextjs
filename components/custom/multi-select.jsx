import { useState, useEffect } from "react";
import Select from 'react-select';
import { getSkills, getTools } from "@/services/workExperienceService";
import useSelectionStore from "@/store/useSelectionStore";


const MultiSelect = ({  items, value, onChange  }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = items === "skills" ? await getSkills() : await getTools();
            setOptions(data);
        };
        fetchData();
    }, [items]);
    
    const handleChange = (selectedOptions) => {
        onChange(selectedOptions.map(option => option.value));
    };

    const selectedOptions = options.filter(option => value.includes(option.value));
    return (
        <Select
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    );
};

export default MultiSelect;
