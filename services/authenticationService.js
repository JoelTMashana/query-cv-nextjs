import axios from "axios";
import useChatStore from "@/store/chatStore";

async function loginUser(email, password) {
    
    try {
        const response = await axios.post('http://localhost:8000/api/v1/login', { email, password }, {
            withCredentials: true,  
        });

        console.log(response.data);
        const userDetails = response.data.user;
        useChatStore.getState().loginUser(userDetails);
        return response.data
    } catch (error) {
        console.error('Login failed:', error);
    }
}

async function logoutUser() {
    try {
        const response = await axios.post('http://localhost:8000/api/v1/logout', {}, {
            withCredentials: true,  
        });
        useChatStore.getState().logoutUser();
        window.location.href = '/login'; 
        console.log(response.data);
    } catch (error) {
        console.error('Logout failed:', error);
    }
}

async function getTemporaryAccessTokenForUnregisteredUser () {
    try {
        const response = await axios.post('http://localhost:8000/api/v1/users/temporary-token', {}, {
            withCredentials: true,  
        });
        console.log(response.data);
        if (response.data) {
            window.location.href = '/chat'; 
        } else {
            console.error('An error occured');
        }
    } catch (error) {
        console.error('An error occured:', error);
    }
}


export { loginUser, logoutUser, getTemporaryAccessTokenForUnregisteredUser };