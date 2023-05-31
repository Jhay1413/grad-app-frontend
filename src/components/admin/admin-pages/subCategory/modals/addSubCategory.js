import { Modal } from "antd";
import { useEffect, useState } from "react";
import { addCategory, getAllCategory } from "../../../../../api/category";
import { addSubCategory, putCategory } from "../../../../../api/subCategory";

const AddSubCategoryModal = ({isModalOpen,currentData,setCurrentData,handleCancel,dataChange,setDataChange,categories,showToast}) => {
   
    const [name,setName] =  useState('');
    const [categoryId,setCategoryId] =  useState('');

    useEffect(()=>{
        let defaultCategory = categories.find(item=> item.categoryName === "Masteral");

        if(defaultCategory){
            setCategoryId(defaultCategory._id)
        }

    },[categories]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await addSubCategory(name);
            if(response.status === 200){
                const pushResponse = await putCategory(categoryId,response.data);
                if((response.status && pushResponse.status) === 200 ){
                    showToast('success','Data has been Added!');
                }
            }
        } catch (error) {
            showToast('error','Data insertion Failed !');
            console.log(error);
        }
        setName('');
        setDataChange(!dataChange);
        handleCancel();
        
    }
    return ( 
        <>
            <Modal title="Sub-Category Form" onCancel={handleCancel} open={isModalOpen} footer={null} centered>
            <form onSubmit={handleSubmit}>
                <div className="w-full mx-auto flex flex-col">
                   
                    <div className="flex flex-row w-11/12 mx-auto">
                        <div className="basis-3/4">
                            <input type="text" value={name ? name : ''}name="name" className="w-11/12 mx-auto text-xl rounded border-2 p-2" placeholder="Enter Sub-Category" onChange = {e=>setName(e.target.value)}/>
                        </div>
                        <div className="basis-1/3  mx-auto">
                            <select value={categoryId} onChange={e=>setCategoryId(e.target.value)} className="w-full mx-auto text-xl rounded border-2 p-2">
                                {categories.map(category =>(
                                    <option key={category._id} value={category._id}>{category.categoryName}</option>
                                ))}    
                            </select>
                        </div>
                    </div>
                    <button className='p-2 bg-blue-500 my-2 text-white rounded-md w-11/12 mx-auto'>Submit</button>
                </div>
            </form>
                
            </Modal>        
        </>
     );
}
 
export default AddSubCategoryModal;