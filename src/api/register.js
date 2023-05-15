import axios from 'axios'

const Users_API = process.env.REACT_APP_USER_API;

export const addUsers = async (data) =>{
  
    try {
        const response = await axios.post(Users_API, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response;
      } catch (error) {
        return error;
      }
};