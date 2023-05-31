
import { FormOutlined } from '@ant-design/icons';
import { Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { getAllSubCategory } from "../../../../api/subCategory";
import { getAllCategory } from "../../../../api/category";
import {toast,ToastContainer} from 'react-toastify';
import AddSubCategoryModal from "./modals/addSubCategory";

const SubCategoryIndex = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categories,setCategories] = useState([])
    const [subCategory,setSubCategory] = useState([]);
    const [currentData,setCurrentData]= useState(null)
    const [dataChange,setDataChange] = useState(false);


    useEffect(()=>{
        async function getSubCategoryList(){
            try {
                const data = await getAllSubCategory();
                setSubCategory(data.data);
            } catch (error) {
                
            }
        }
        getSubCategoryList();
    },[dataChange])
    useEffect(()=>{
        async function getListOfCategory(){
            try {
                const data = await getAllCategory();
                setCategories(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getListOfCategory();
        
    },[]);
    const showToast = (status,message) =>{
        toast[status](message);
    }
    const columns = [
        {
            title: 'Sub-Category ID',
            dataIndex: '_id',
            key: '_id'
        },
        {
            title: 'Sub-Category Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key:'actions',
            render:(text,record)=>(
                <Space size ="middle">
                <Button onClick={()=> handleEdit(record)}>Edit</Button>
                <Button onClick = {() => handleDelete(record)}type="primary" danger>Delete</Button>
            </Space>
            )
               
        }
    ]
    const handleEdit = () =>{

    }
    const handleDelete = () =>{

    }
    const handleCancel =()=>{
        setIsModalOpen(false);
    }
    return ( 
        <>
              <div className='max-w-screen-2xl bg-white mx-auto'>
                <ToastContainer/>
                <div className='flex flex-col p-5'>
                    <div className='flex p-5 text-xl font-medium md:text-4xl'>
                        Sub-Category Table
                    </div>
                    <div className="flex md:justify-between p-5">
                        <button className="" onClick={() => setIsModalOpen(!isModalOpen)} >
                            <FormOutlined style={{ fontSize: '30px', color: '#08c' }}/>
                        </button>
                    </div>
                    <div>
                    <Table
                            columns={columns}
                            dataSource={subCategory ? subCategory.map(details=>({...details,key:details._id})): []}
                        />
                    <AddSubCategoryModal isModalOpen={isModalOpen} handleCancel={handleCancel} dataChange={dataChange} setDataChange={setDataChange} categories={categories} showToast={showToast}/>
                    </div>
                </div>
              </div>
        </>
     );
}
 
export default SubCategoryIndex;