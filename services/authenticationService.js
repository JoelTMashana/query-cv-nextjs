import axios from "axios";


async function loginUser(email, password) {
    try {
        const response = await axios.post('http://localhost:8000/api/v1/login', { email, password }, {
            withCredentials: true,  
        });

        console.log(response.data);
        return response.data
    } catch (error) {
        console.error('Login failed:', error);
    }
}

async function logoutUser() {
    console.log('logoutuser called')
    try {
        const response = await axios.post('http://localhost:8000/api/v1/logout', {}, {
            withCredentials: true,  
        });
        window.location.href = '/login'; 
        console.log(response.data);
    } catch (error) {
        console.error('Logout failed:', error);
    }
}

export { loginUser, logoutUser };