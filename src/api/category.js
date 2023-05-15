import axios from "axios";

const Category_API = process.env.REACT_APP_CATEGORY_API;

export const getAllCategory = async () =>{
    try{
        const response = await axios.get(`${Category_API}/getCategory`);

        return{
            status: response.status,
            data: response.data
        };
    } catch (error) {
        console.error('Error on Fetching the Data',error);

        return{
            status: error.response ? error.response.status: null,
            data: null,
            error: error.message
        };
    }
}
export const addCategory = async (data) =>{
    try {
        const response = await axios.post(`${Category_API}/insertCategory`,data);
        return response;
    } catch (error) {
        console.log('Error on Adding the Data',error);
    }
}
export const deleteSpecificCategory = async(id)=>{
    try {
        const response = await axios.delete(`${Category_API}/deleteCategory/${id}`);
        return response;
    } catch (error) {
        console.log('Error on Deleteing the Data',error);
    }
}
export const updateCategory =async(id,data)=>{
    try {
        const response = await axios.put(`${Category_API}/updateCategory/${id}`,data);
        return response;
    } catch (error) {
        console.log('Error on Updating the data !', error);
    }
}