import axios from 'axios';

const Research_API = process.env.REACT_APP_RESEARCH_API;

export const getResearch = async () => {
    try {
      const response = await axios.get(`${Research_API}/getResearch`);
     
      return {
        status: response.status,
        data: response.data
      };
    } catch (error) {
      console.error('Error on Fetching the Data',error);
  
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
        console.log('Error on Adding the Data',error);
    }  
}
export const deleteSpecificResearch = async(id)=>{
    try {
        const response = await axios.delete(`${Research_API}/deleteResearch/${id}`);
        return response;
    } catch (error) {
        console.error('Error on Deleting the Data',error);
    }
}
export const UpdateResearch = async(id,data)=>{
    
    try {
        const response = await axios.put(`${Research_API}/updateResearch/${id}`,data);
        return response.data;
    } catch (error) {
        console.error('Error on Updating the Data',error);
    }
}
export const FilterData = async (From,To) =>{
  try {
    const response = await axios.get(`${Research_API}/filteredData`,{
      params:{
        startYear:From,
        endYear:To
      }
    })
    return response;
  } catch (error) {
    
  }
}
export const DownloadData = async(data)=>{
  try {
    const response = await axios.post(`${Research_API}/downloadData`,data, { responseType: 'blob' });
    return response;
  } catch (error) {
    
  }
}