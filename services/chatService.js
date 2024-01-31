import axios from "@/lib/utils/axiosConfig";
import useChatStore from "@/store/chatStore";

async function queryGPTPreRegistration(query) {
    const experiences = JSON.parse(sessionStorage.getItem('workExperiences')) || [];
    try {
        const response = await axios.post('/users/experiences', { query, experiences});

        console.log(response.data);
        return response.data
    } catch (error) {
        console.error('An error occured:', error);
    }
}

async function queryGPTPostRegistration(query) {
    const {user} = useChatStore.getState();
    const userId = user.user_id;
    try {
        const response = await axios.post(`/users/${userId}/experiences/query`, { query});

        console.log(response.data);
        return response.data
    } catch (error) {
        console.error('An error occured:', error);
    }
}

export {queryGPTPreRegistration, queryGPTPostRegistration}