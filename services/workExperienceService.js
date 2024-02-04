import axios from '@/lib/utils/axiosConfig';
import useSelectionStore from '@/store/useSelectionStore';
import useChatStore from '@/store/chatStore';

async function getSkills() {
  try {
    const response = await axios.get('/skills')
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
    const response = await axios.get('/tools')
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

const handleWorkExperienceSubmission = async (formData) => {
  console.log('handleWorkExperienceSubmission called!');
  try {
    // Organise form data
    const { selectedSkills, selectedTools } = useSelectionStore.getState();
    const {user} = useChatStore.getState();
    const userId = user.user_id;
    const { position, company, industry, duration, description, outcomes } = formData;
    const experienceData = { position, company, industry, duration, description, outcomes };

    const experienceResponse = await axios.post(`/users/${userId}/experiences`, experienceData);

    const experienceId = experienceResponse.data.experience_id;

    // Link items to experiece and user
    await linkSkillsToExperience(selectedSkills, experienceId);
    await linkToolstoExperience(selectedTools, experienceId);
    await linkSkillsAndToolsToUser(userId, selectedSkills, selectedTools);

    console.log('handleWorkExperienceSubmission success!');
  } catch (error) {
    console.error('An error occurred during the work experience form submission:', error);
  }
}

// Helper function to create and link skills
const linkSkillsToExperience = async (skills, experienceId) => {
  if (skills && skills.length > 0) {
    const response = await axios.post(`/experiences/${experienceId}/skills`, { skill_ids: skills });
  }
}


const linkToolstoExperience = async (tools, experienceId) => {
  if (tools && tools.length > 0) {
    await axios.post(`/experiences/${experienceId}/tools`, { tool_ids: tools });
  }
}

const linkSkillsAndToolsToUser = async (userId, skillIds, toolIds) => {
  if (skillIds.length > 0) {
    await axios.post(`/users/${userId}/skills`, { skill_ids: skillIds });
  }
  if (toolIds.length > 0) {
    await axios.post(`/users/${userId}/tools`, { tool_ids: toolIds });
  }
}

const deleteWorkExperience = async (experienceId) => {
  console.log('Deleting experince!');
  try {
    const response = await axios.delete(`/experiences/${experienceId}`)
    console.log(response.data);
    console.log(`Experience ${experienceId} deleted.`);
    return response.data
  } catch (error) {
    console.error(`Failed to delete experince with id: ${experienceId}`, error);
  }

}

const getExperience = async (experienceId) => {
  console.log('Getting experince!');
  try {
    const response = await axios.get(`/experiences/${experienceId}`)
    console.log(response.data);
    console.log(`Retrieved experience with id: ${experienceId}.`);
    return response.data
  } catch (error) {
    console.error(`Failed to fetch experince with id: ${experienceId}`, error);
  }

}



export {
  getSkills, 
  getTools, 
  handleWorkExperienceSubmission, 
  deleteWorkExperience,
  getExperience
}
