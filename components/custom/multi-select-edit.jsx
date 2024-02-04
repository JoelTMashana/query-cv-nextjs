import { useState, useEffect } from "react";
import Select from 'react-select';
import { getSkills, getTools } from "@/services/workExperienceService";
import useSelectionStore from "@/store/useSelectionStore";


const MultiSelectEdit = ({ items }) => {
    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const { setSelectedSkills, setSelectedTools, initialSkills, initialTools } = useSelectionStore();
    const initialSelected = items === "skills" ? initialSkills : initialTools;


    useEffect(() => {
        const fetchData = async () => {
            const data = items === "skills" ? await getSkills() : await getTools();
            setOptions(data);
        };
        fetchData();
    }, [items]);
    
    
    useEffect(() => {
        setSelectedOptions(initialSelected);
        console.log('Initiallll: ', initialSelected);
    }, [initialSelected]);

    const handleChange = (selectedOptions) => {
        const { setSelectedSkills, setSelectedTools } = useSelectionStore.getState();
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        
        if (items === "skills") {
          setSelectedSkills(selectedValues);
        } else {
          setSelectedTools(selectedValues);
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

export default MultiSelectEdit;
