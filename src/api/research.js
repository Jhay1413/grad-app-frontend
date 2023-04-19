import axios from 'axios';

const Research_API = process.env.REACT_APP_RESEARCH_API;

export const getResearch = async () => {
    console.log(Research_API);
    try {
      const response = await axios.get(`${Research_API}/getResearch`);
     
      return {
        status: response.status,
        data: response.data
      };
    } catch (error) {
      console.error(error);
  
      return {
        status: error.response ? error.response.status : null,
        data: null,
        error: error.message
      };
    }
  };
export const addResearch = async(data)=>{
    try{
        const response = await axios.post(`${Research_API}/insertResearch`,data);
        return response.data;
    }catch(error){
        console.log(error);
    }  
}
export const deleteSpecificResearch = async(id)=>{
    try {
        const response = await axios.delete(`${Research_API}/deleteResearch/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
export const UpdateResearch = async(id,data)=>{
    
    try {
        const response = await axios.put(`${Research_API}/updateResearch/${id}`,data);
        return response.data;
    } catch (error) {
        console.error('asdasd',error);
    }
}