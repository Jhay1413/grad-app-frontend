import { Modal } from "antd";
import { useEffect, useState } from "react";
import { addCategory } from "../../../../../api/category";
import { updateCategory } from "../../../../../api/category";

const AddCategoryModal = ({isModalOpen,currentData,setCurrentData,handleCancel,dataChange,setDataChange}) => {
    const[category,setCategory] = useState({
        categoryName: ''
    });

    useEffect(()=>{
        if(currentData){
            setCategory(currentData);
           
        }
        else{
            setCategory({categoryName: ''});

           
        }
    },[currentData])
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        if(currentData){
            try {   
                const response = await updateCategory(currentData._id,category);
                setDataChange(!dataChange);
            } catch (error) {
                console.log(error);
            }
            
            setCurrentData(null);
            handleCancel();
        }
        else{
            try {
                const response = await addCategory(category);
                    setDataChange(!dataChange);
                    setCategory(null);
            } catch (error) {
                console.log(error);
            }
           
            handleCancel();
        }
      
    }
    const handleInputChange = (e) =>{
        const {name,value} = e.target;
     
            setCategory((prevState) =>({
                ...prevState,
                    [name]: value
            }));

    }

    return ( 
        <>
            <Modal title="Category Form" onCancel = {handleCancel} open={isModalOpen} footer={null} centered>
                <div className="w-full mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="flex mt-5 flex-col">
                            <input type="text" value={category ?category.categoryName : '' } name ="categoryName" onChange ={handleInputChange} className="w-11/12 mx-auto text-xl rounded border-2 p-2" placeholder="Enter Category"/>
                            {
                                currentData ?(
                                    <button className='p-2 bg-green-500 my-2 text-white rounded-md w-11/12 mx-auto'>Update</button>
                                ):
                                    <button className='p-2 bg-blue-500 my-2 text-white rounded-md w-11/12 mx-auto'>Submit</button>
                            }
                            
                        </div>
                    </form>
                </div>  
               
            </Modal>
        </> 
   
   );
} 
export default AddCategoryModal;