import axios from "axios";


async function queryGPTPreRegistration(query) {
    const experiences = JSON.parse(sessionStorage.getItem('workExperiences')) || [];
    try {
        const response = await axios.post('http://localhost:8000/api/v1/users/experiences', { query, experiences}, {
            withCredentials: true,  
        });

        console.log(response.data);
        return response.data
    } catch (error) {
        console.error('An error occured:', error);
    }
}

export {queryGPTPreRegistration}