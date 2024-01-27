"use client"
import { useState } from "react"
import Select from 'react-select';


const MultiSelect = ({ items }) => {
    const [selectedSkills, setSelectedSkills] = useState([]);

    const toolOptions = [
        {value: "react", label: "React"},
        {value: "nodejs", label: "Node.js"},
        {value: "css", label: "CSS"},
        {value: "javascript", label: "JavaScript"}
    ]
    const skillOptions = [
        {value: "communication", label: "Communication"},
        {value: "teamwork", label: "Teamwork"},
        {value: "stakeholder_engagement", label: "Stakeholder Engagement"},
        {value: "project_planning", label: "Project Planning"}
    ]


    const handleSkillChange = (selectedOptions) => {
        setSelectedSkills(selectedOptions);
    };

    return (
        <Select
            isMulti
            options={items === "skills" ? skillOptions : toolOptions}
            value={selectedSkills}
            onChange={handleSkillChange}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    )
}

export default MultiSelect;