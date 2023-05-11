import { useState, useEffect } from "react";
import { getResearch } from "../../../../api/research";
import { Table, Typography } from "antd";
import { useNavigate} from 'react-router-dom';
const ResearchListIndex = () => {
    const { Link } = Typography;
    const navigate = useNavigate();
    const [data,setData] = useState([])

    const Columns = [
        {
            title: 'Research Title',
            dataIndex: 'ResearchName',
            key: 'ResearchName',
            render: (name, record) => (
                <Link onClick={() => handleNameClick(name, record)}>
                  {name}
                </Link>
              ),
        },
        {
          title: 'Published',
          dataIndex: 'Details',
          key: 'Details.published',
          render : (Details) => Details.published,
        },
        {
          title: 'Year Started',
          dataIndex: 'Details',
          key: 'Details.yearStarted',
          render : (Details) => Details.yearStarted,
        },
        {
          title: 'Year Completed',
          dataIndex: 'Details',
          key: 'Details.yearCompleted',
          render : (Details) => Details.yearCompleted,
        },
        {
          title: 'Agency',
          dataIndex: 'Details',
          key: 'Details.agency',
          render : (Details) => Details.agency,
        },
        {
          title: 'Region',
          dataIndex: 'Details',
          key: 'Details.region',
          render : (Details) => Details.region,
        },
        {
          title: 'Created At',
          dataIndex: 'Details',
          key: 'Details.createdAt',
          render : (Details) => Details.createdAt,
        },
        {
          title: 'Updated At',
          dataIndex: 'Details',
          key: 'Details.updatedAt',
          render : (Details) => Details.updatedAt,
        }
      ]
    const transformedData = data.map((item) => {
        return {
          ResearchName: item.ResearchName,
          ...item.Details,
        };
      });
    useEffect(()=>{
        async function getAllResearch(){
            try{
                const {data} = await getResearch();
                setData(data);
            }catch(error){
                console.log('Error Fetching Data:',error)
            }
        }
        getAllResearch();
       
    },[])
    const handleNameClick = (name,record) =>{

        navigate(`/${name}`,{ state: { record } });
    }
    return ( 
        <>
            <div className="w-11/12 mx-auto p-5 bg-grey-500">
                <Table columns={Columns} dataSource = {data.map(data=>({...data,key:data._id}))}/>
            </div>
            
        </>
     );
}
 
export default ResearchListIndex;