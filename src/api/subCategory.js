import axios from "axios"

const SubCategory_API = process.env.REACT_APP_SUB_CATEGORY_API;

export const getAllSubCategory = async() =>{
    try {
        const response = await axios.get(`${SubCategory_API}/getSubCategories`);
        return response
    } catch (error) {
        console.error('Error on Fetching the Data',error);
    }
}
export const addSubCategory  = async (data) =>{
    try {
        const response = await axios.post(`${SubCategory_API}/insertSubCategory`,{name:data});
        return response
    } catch (error) {
        console.error('Error on Updating the Data !', error);
    }
}
export const deleteSpecificSubCategory = async(id) =>{
    try {
        const response = await axios.delete(`${SubCategory_API}/deleteSubCategory/${id}`);
        return response
    } catch (error) {
        console.error('Error on deleting the Data ! ',error);
    }
}
export const updateSubCategory = async (id,data)=>{
    try {
        const response = await axios.put(`${SubCategory_API}/updateSubCategory/${id}`,data);
        return response;
    } catch (error) {
        console.error('Error on Updating the data', error);
    }
}
export const putCategory = async (id,data) =>{
    try {
        const response = await axios.put(`${SubCategory_API}/addingCategory/${id}`,data)
        return response;
    } catch (error) {
        console.error('Error on Updating the data', error);
    }
}