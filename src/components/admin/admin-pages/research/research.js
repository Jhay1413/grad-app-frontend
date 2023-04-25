
import { Space, Table,Button ,Input} from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import AddResearch from '../../admin-modals/addData';
import { getResearch } from '../../../../api/research';
import { deleteSpecificResearch } from '../../../../api/research';       



const ResearchPage = ({loading,setLoading}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [listResearch,setResearch] = useState([]);
    const [tempResData,setTempResData] = useState('');
    const [updateData,setUpdateData] = useState();
    const [dataChange,setDataChange] = useState(false);
    const [expandedKey, setExpandedKey] = useState(null);

  
    useEffect(()=>{
      async function getAllResearch() {
        try {
        
          const {status,data} = await getResearch();
          console.log(status);
          setResearch(data);
        
       
        } catch (error) {
          console.error('Error fetching research:', error);
          
        }
    }
      getAllResearch();
    }, [dataChange]);

  

    const paginationConfig = {
      pageSize: 10, // Set the number of records per page to 10
    };
    const columns = [
      {
        title: 'Research Title',
        dataIndex: 'ResearchName',
        key: 'ResearchName',
        className: 'wrapText'
      },
      {
        title: 'Proponents',
        dataIndex: 'Proponents',
        key: 'Proponents',
      },
      {
        title: 'beneficiaries',
        dataIndex: 'Beneficiaries',
        key: 'Beneficiaries',
      },
      {
        title: 'fund source',
        dataIndex: 'FundSource',
        key: 'FundSource',
      },
      {
        title: 'No Of Patents',
        dataIndex: 'NoOfPatents',
        key: 'NoOfPatents',
      },
      {
        title: 'No. Of Utility Models',
        dataIndex: 'NoOfUtilModel',
        key: 'NoOfUtilModel',
      },
      {
        title: 'How to cite',
        dataIndex: 'Cite',
        key: 'Cite',
      },
      {
        title: 'Acceptance Date',
        dataIndex: 'AcceptanceDate',
        key: 'AcceptanceDate',
      },
      {
        title: 'Remarks',
        dataIndex: 'Remarks',
        key: 'Remarks',
      },
      {
        title: 'Abstract',
        dataIndex: 'Abstract',
        key: 'Abstract',
        className: 'wrapText',
        render: (text, record) => {
          const truncatedText = text.slice(0, 100) + (text.length > 100 ? '...' : '');
          const displayText = expandedKey === record.key ? text : truncatedText;
          
          return (
            <span
              
              style={{ cursor: 'pointer' }}
              onClick={() => setExpandedKey(expandedKey === record.key ? null : record.key)}
            >
              {displayText}
            </span>
          );
        },
      },
      
      {
        title: 'CreatedAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: 'UpdateAt',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
      },
      {
        title:'Actions',
        dataIndex:'actions',
        key:'actions',
        render:(text,record)=>(
          <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
            
          
        )
      }
    ];

    const handleCancel = ()=>{
    
      setIsModalOpen(false);
     
    }
    const handleEdit = (record) => {
      setUpdateData(record);
      setIsModalOpen(true);
    };
    
    const handleDelete = async (record) => {
      const response = await deleteSpecificResearch(record._id);

      if(response.status === 200){
        setDataChange(!dataChange);
      }
      console.log('Deleted Successfully',response);
    };
    const addButtonClick = () =>{
      setIsModalOpen(true);
    }
    const loadingState = () =>{
      setLoading(!loading);
    }
    const dataSource = () =>{

    }
    return ( 
        <>
          <div className='max-w-7xl bg-white mx-auto'>
            <div className='flex flex-col p-5'>
             
                <button className='flex p-5' onClick={addButtonClick}><FormOutlined style={{ fontSize: '30px', color: '#08c' }}/></button>
                <Table className = ' ' columns={columns}  dataSource = {listResearch.map(research=>({...research,key:research._id}))} scroll={{ x: 'max-content',}} pagination={paginationConfig}/>
                <AddResearch isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleCancel={handleCancel} updateData={updateData} setUpdatedata={setUpdateData} dataChange = {dataChange} setDataChange={setDataChange} loadingState={loadingState}/>
            </div>
          </div>
        </>
     );
}
 
export default ResearchPage;