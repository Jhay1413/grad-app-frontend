import axios from 'axios'

const Users_API = process.env.REACT_APP_USER_API;

export const addUsers = async (data) =>{
  
    try {
        const response = await axios.post(`${Users_API}`,data);
        return response;
    } catch (error) {
        return error;
    }
  
}