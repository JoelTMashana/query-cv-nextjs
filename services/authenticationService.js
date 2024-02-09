import axios from "@/lib/utils/axiosConfig";
import useChatStore from "@/store/chatStore";

async function loginUser(email, password) {
    console.log('Login User called');
    const response = await axios.post('/login', { email, password });
    const { access_token } = response.data;
    localStorage.setItem('accessToken', access_token);

    const tempAccessToken = localStorage.getItem('tempAccessToken');
    if (tempAccessToken) {
        localStorage.removeItem('tempAccessToken');
        console.log('Temporary access token removed');
    }

    console.log(response.data);
    if (access_token) {
        console.log('Access token found:', access_token);
    }

    const userDetails = response.data.user;
    useChatStore.getState().loginUser(userDetails);
    return response.data;
}

async function logoutUser() {
    try {
        console.log('Logout User called')
        const response = await axios.post('/logout', {});
        localStorage.removeItem('accessToken');
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
        const { access_token } = response.data;
        localStorage.setItem('tempAccessToken', access_token);
        return response.data;
    } catch (error) {
        console.error('An error occured:', error);
    }
}


export { loginUser, logoutUser, getTemporaryAccessTokenForUnregisteredUser };