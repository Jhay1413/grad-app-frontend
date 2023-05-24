import { useState, useEffect } from "react";
import { DownloadData, FilterData, getResearch } from "../../../../api/research";
import { Input, Table, Typography } from "antd";
import { useNavigate} from 'react-router-dom';
const ResearchListIndex = () => {
    const { Link } = Typography;
    const navigate = useNavigate();
    const [data,setData] = useState([])
    const [selectedYearFrom,setSelectedYearFrom] = useState('');
    const [selectedYearTo,setSelectedYearTo] = useState('');
    const [filteredData,setFilteredData] = useState(null);
    const currentYear = new Date().getFullYear();
    const startYear = 1970;

    const dataSource = (filteredData ? filteredData:data).map(item =>({...item,key:item._id}));
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

        navigate(`/details/${name}`,{ state: { record } });
    }

    const handleChange1 = (event) =>setSelectedYearFrom(event.target.value);
    const handleChange2 = (event) =>setSelectedYearTo(event.target.value);

    const handleFilterSubmit = async(e) =>{
      e.preventDefault();
      try {
        const response = await FilterData(selectedYearFrom,selectedYearTo);
        setFilteredData(response.data);
      } catch (error) {
        
      }
    };
    const handleFilterDownload = async(e)=>{
      e.preventDefault();
      try {
        const response = await DownloadData(filteredData);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Report.xlsx');
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        
      }
    }
    const generateYear = (startYear,endYear) =>{
      let years = [];
      for (let year = startYear;year<=endYear;year++){
        years.push(year);
      }
      return years;
    };
    const yearOptions = generateYear(startYear,currentYear);
    return ( 
        <>
          <div className="mt-10">
            
          </div>
            <div className="w-full mx-auto h-full bg-white ">
              <div className="flex flex-col">
                <div className="">
                <div className="grid grid-cols-3 gap-4 px-3 py-4">
                    <div className="flex flex-row space-x-2 items-center justify-center">
                      <label htmlFor="Category">Category:</label>
                        <select className="w-full border border-current rounded-lg">
                          <option>Select..</option>
                            {yearOptions.map(year =>(
                              <option key = {year} value={year}>  
                                {year}
                              </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-row space-x-2 items-center justify-center">
                        <label htmlFor="Year From">From:</label>
                          <select value = {selectedYearFrom} onChange={handleChange1} className="w-full border border-current rounded-lg">
                            <option>Select..</option>
                              {yearOptions.map(year =>(
                                <option key = {year} value={year}>  
                                  {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-row space-x-2 items-center justify-center">
                        <label htmlFor="Year To">To:</label>
                          <select value={selectedYearTo} onChange={handleChange2} className="w-full border border-current rounded-lg">
                            <option>Select..</option>
                              {yearOptions.map(year =>(
                                <option key = {year} value={year}>  
                                  {year}
                                </option>
                            ))}
                        </select>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 items-center justify-center w-full p-5">
                      <Input.Search
                                placeholder='searchbox'/>
                        <div className="px-4 py-2 bg-red-900 rounded-lg">
                          
                          <button onClick = {handleFilterSubmit} className="text-white">Search</button>
                        </div>
                        <div className="px-4 py-2 bg-green-400 rounded-lg">
                          
                          <button onClick = {handleFilterDownload} className="text-white">Download</button>
                        </div>
                          
                     
                    </div>
                </div>
                <Table columns={Columns} dataSource = {dataSource}/>
              </div>
                
            </div>
            
        </>
     );
}
 
export default ResearchListIndex;