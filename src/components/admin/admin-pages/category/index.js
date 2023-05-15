import { ToastContainer } from "react-toastify";
import { FormOutlined } from '@ant-design/icons';
import { Table } from "antd";
import { useEffect, useState } from "react";
const CategoryIndexPage = () => {
    const [category,setCategory] = useState([]);

    useEffect(()=>{
        async function getAllCategory(){
            try {
                   
            } catch (error) {
                
            }
        }
    },[])
    const columns = [
        {
            title: 'Category ID',
            dataIndex: 'categoryID',
            key: 'categoryID'
        },
        {
            title: 'Category Name',
            dataIndex: 'categoryName',
            key: 'categoryName'
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
                        <button className="" >
                            <FormOutlined style={{ fontSize: '30px', color: '#08c' }}/>
                        </button>
                    </div>
                    <div className="">
                        <Table
                            columns={columns}
                        />
                    </div>
                </div>
            </div>
            
            
        </>
     );
}
 
export default CategoryIndexPage;