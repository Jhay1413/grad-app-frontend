
import { Space, Table,Button ,Input} from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import AddResearch from '../../admin-modals/addData';
import { getResearch } from '../../../../api/research';
import { deleteSpecificResearch } from '../../../../api/research';       
import WarningModal from '../../admin-modals/warning';
import {toast,ToastContainer} from 'react-toastify';


const ResearchPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen,setIsDeleteModalOpen] = useState(false);
    const [recordToDelete,setRecordToDelete] = useState('');
    const [listResearch,setResearch] = useState([]);
    const [updateData,setUpdateData] = useState();
    const [dataChange,setDataChange] = useState(false);
    const [expandedKey, setExpandedKey] = useState(null);
    const [searchedData,setSearchData] = useState("");

    useEffect(()=>{
      async function getAllResearch() {
        try {
        
          const {status,data} = await getResearch();
          console.log()
          setResearch(data);
        } catch (error) {
          console.error('Error fetching research:', error);
          
        }
    }
      getAllResearch();
    }, [dataChange]);
    const showToast = (status) =>{
      toast[status]('Success message!');
     
    }

    const paginationConfig = {
      pageSize: 10, // Set the number of records per page to 10
    };
    const expandedRowRender = (record) =>{
      const dataSource = record.Details ? [record.Details]: [];

      const nestedColumns = [
        {
          title: 'Published',
          dataIndex: 'published',
          key: 'published'
        },
        {
          title: 'Year Started',
          dataIndex: 'yearStarted',
          key: 'yearStarted'
        },
        {
          title: 'Year Completed',
          dataIndex: 'yearCompleted',
          key: 'yearCompleted'
        },
        {
          title: 'Acceptance Date',
          dataIndex: 'acceptanceDate',
          key: 'acceptanceDate'
        },
        {
          title: 'Agency',
          dataIndex: 'agency',
          key: 'agency'
        },
        {
          title: 'Region',
          dataIndex: 'region',
          key: 'region'
        },
        {
          title: 'Created At',
          dataIndex: 'createdAt',
          key: 'createdAt'
        },
        {
          title: 'Updated At',
          dataIndex: 'updatedAt',
          key: 'updatedAt'
        }
      ]
      return (
        <Table
          columns={nestedColumns}
          dataSource = {dataSource ? dataSource.map(details=>({...details,key:details._id})): [] }
          pagination={false}
        />
      );

    };
    const columns = [
      {
        title: 'Research Title',
        dataIndex: 'ResearchName',
        key: 'ResearchName',
        className: 'wrapText',
        filteredValue: [searchedData],
        onFilter:(value,record)=>{
          return (
            String(record.ResearchName)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
            String(record.Proponents)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
            String(record.Beneficiaries)
            .toLowerCase()
            .includes(value.toLowerCase()))
        }
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
        title: 'Remarks',
        dataIndex: 'Remarks',
        key: 'Remarks',
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
        fixed: 'right',
        width: 100,
        render:(text,record)=>(
          <Space size="middle">
          <Button onClick={() => handleEdit(record)} >Edit</Button>
          <Button onClick={() => handleDelete(record)} type="primary" danger>Delete</Button>
        </Space>
            
          
        )
      }
    ];
    const handleEdit = (record) => {
      setUpdateData(record);
      setIsModalOpen(true);
    };
    
    const handleDelete = (record) => {
      setRecordToDelete(record);
      setIsDeleteModalOpen(!isDeleteModalOpen);
     
    };

    return ( 
        <>
          <div className='max-w-screen-2xl bg-white mx-auto'>
            <ToastContainer/>
            <div className='flex flex-col p-5'>
              <div className='flex p-5 text-xl font-medium md:text-4xl'>
                Research Table
              </div>
            
              <div className='flex  md:justify-between p-5 '>
                <button className='' onClick={()=>setIsModalOpen(!isModalOpen)}><FormOutlined style={{ fontSize: '30px', color: '#08c' }}/></button>
                  <Input.Search 
                    placeholder='searchbox'
                    onChange={(e)=>{
                      setSearchData(e.target.value.toLowerCase());
                    }}
                    className='md:w-52 p-2'
                    />
              </div>
               
                <Table  
                  columns={columns}  
                  dataSource = {listResearch.map(research=>({...research,key:research._id}))} 
                  scroll={{ x: 'max-content',}} pagination={paginationConfig}
                  expandedRowRender = {expandedRowRender}/>
                <AddResearch isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} updateData={updateData} setUpdatedata={setUpdateData} dataChange = {dataChange} setDataChange={setDataChange} showToast={showToast}/>
                <WarningModal isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} dataChange={dataChange} setDataChange={setDataChange} recordToDelete= {recordToDelete}/>
                 
            </div>
          </div>
        </>
     );
}
 
export default ResearchPage;