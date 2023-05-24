import { ToastContainer } from "react-toastify";
import { FormOutlined } from '@ant-design/icons';
import { Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { getAllCategory } from "../../../../api/category";
import AddCategoryModal from "./modals/addCategory";
const CategoryIndexPage = () => {
    const [category,setCategory] = useState([]);
    const [currentData,setCurrentData]= useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataChange,setDataChange] = useState(false);

    useEffect(()=>{
        async function getCategoryList(){
            try {
                const data = await getAllCategory();
                setCategory(data.data);
                
               
            } catch (error) {
                console.log(error);
            }
           
        }
        getCategoryList();
       
    },[dataChange])

    const handleEdit = async(data)=>{
       
        setCurrentData(data);
        setIsModalOpen(!isModalOpen);
    }
    const handleCancel = () =>{
        
        setIsModalOpen(!isModalOpen);
        setCurrentData(null);
    }
    const handleDelete = async(data)=>{

    }

    const columns = [
        {
            title: 'Category ID',
            dataIndex: '_id',
            key: '_id'
        },
        {
            title: 'Category Name',
            dataIndex: 'categoryName',
            key: 'categoryName'
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
    return ( 
        <>
            <div className='max-w-screen-2xl bg-white mx-auto'>
                <ToastContainer/>
                <div className='flex flex-col p-5'>
                    <div className='flex p-5 text-xl font-medium md:text-4xl'>
                        Category Table
                    </div>
                    <div className="flex md:justify-between p-5">
                        <button className="" onClick={() => setIsModalOpen(!isModalOpen)} >
                            <FormOutlined style={{ fontSize: '30px', color: '#08c' }}/>
                        </button>
                    </div>
                    <div className="">
                        <Table
                            columns={columns}
                            dataSource={category ? category.map(details=>({...details,key:details._id})): []}
                        />
                        <AddCategoryModal isModalOpen={isModalOpen} currentData = {currentData} setCurrentData = {setCurrentData} handleCancel={handleCancel} dataChange={dataChange} setDataChange={setDataChange}/>
                    </div>
                </div>
            </div>
            
            
        </>
     );
}
 
export default CategoryIndexPage;