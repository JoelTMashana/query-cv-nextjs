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

async function handleWorkExperienceSubmission(formData) {
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
async function linkSkillsToExperience(skills, experienceId) {
  if (skills && skills.length > 0) {
    const response = await axios.post(`/experiences/${experienceId}/skills`, { skill_ids: skills });
  }
}


async function linkToolstoExperience(tools, experienceId) {
  if (tools && tools.length > 0) {
    await axios.post(`/experiences/${experienceId}/tools`, { tool_ids: tools });
  }
}

async function linkSkillsAndToolsToUser(userId, skillIds, toolIds) {
  if (skillIds.length > 0) {
    await axios.post(`/users/${userId}/skills`, { skill_ids: skillIds });
  }
  if (toolIds.length > 0) {
    await axios.post(`/users/${userId}/tools`, { tool_ids: toolIds });
  }
}


export {getSkills, getTools, handleWorkExperienceSubmission}
