import { useState, useEffect } from "react";
import Select from 'react-select';
import { getSkills, getTools } from "@/services/workExperienceService";

const MultiSelect = ({ items }) => {
    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = items === "skills" ? await getSkills() : await getTools();
            setOptions(data);
        };
        fetchData();
    }, [items]);

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

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
