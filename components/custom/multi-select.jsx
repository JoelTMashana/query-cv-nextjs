import { useState, useEffect } from "react";
import Select from 'react-select';
import { getSkills, getTools } from "@/services/workExperienceService";
import useSelectionStore from "@/store/useSelectionStore";


const MultiSelect = ({ items }) => {
    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const { setSelectedSkills, setSelectedTools } = useSelectionStore();


    useEffect(() => {
        const fetchData = async () => {
            const data = items === "skills" ? await getSkills() : await getTools();
            setOptions(data);
        };
        fetchData();
    }, [items]);

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        console.log('Selected: ', selectedOptions)
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        
        // Update store based on 'items' prop
        if (items === "skills") {
            setSelectedSkills(selectedValues);
            console.log('Selected for store: ', setSelectedSkills)
        } else {
            setSelectedTools(selectedValues);
            console.log('Selected for store: ', setSelectedTools)
        }
      
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
