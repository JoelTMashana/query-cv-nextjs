import axios from "@/lib/utils/axiosConfig";


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

export {queryGPTPreRegistration}