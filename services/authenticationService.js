import axios from "@/lib/utils/axiosConfig";
import useChatStore from "@/store/chatStore";

async function loginUser(email, password) {
    
    try {
        const response = await axios.post('/login', { email, password });

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
        const response = await axios.post('/logout', {});
        useChatStore.getState().logoutUser();
        window.location.href = '/login'; 
        console.log(response.data);
    } catch (error) {
        console.error('Logout failed:', error);
    }
}

async function getTemporaryAccessTokenForUnregisteredUser () {
    try {
        const response = await axios.post('/users/temporary-token', {});
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