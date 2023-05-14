import axios from 'axios'

const Auth_API = process.env.REACT_APP_AUTH_API;
export const loginAuth = async (data) => {
    try {
        const response = await axios.post(`${Auth_API}`,data);
        return response;
    } catch (error) {
        return error;
    }
}