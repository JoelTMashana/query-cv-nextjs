import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

async function getSkills() {
  try {
    const response = await axios.get(`${API_BASE_URL}/skills`, {
      withCredentials: true, 
    });

    console.log(response.data);
    return response.data.map(skill => ({
      value: skill.skill_id, 
      label: skill.skill_name
    }));
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    return []; 
  }
};

async function getTools() {
  try {
    const response = await axios.get(`${API_BASE_URL}/tools`, {
      withCredentials: true, 
    });

    console.log(response.data);
    return response.data.map(tool => ({
      value: tool.tool_id,
      label: tool.tool_name
    }));
  } catch (error) {
    console.error('Failed to fetch tools:', error);
    return []; 
  }
};

export {getSkills, getTools}
