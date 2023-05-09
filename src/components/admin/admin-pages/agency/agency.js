import { Table } from "antd";

const AgencyIndex = () => {
    const columns = [
        {
            title: 'Agency Name',
            dataIndex: 'AgencyName',
            key: 'AgencyName'
        },
        {
            title: 'Agency Address',
            dataIndex: 'AgencyAddress',
            key: 'AgencyAddress'
        },
        {
            title: 'Agency Contact',
            dataIndex: 'AgencyContact',
            key: 'AgencyContact'
        },
        {
            title: 'Agency Email',
            dataIndex: 'AgencyEmail',
            key: 'AgencyEmail'
        },
        {
            title: 'Longitude',
            dataIndex: 'Longitude',
            key: 'Longitude'
        },
        {
        title: 'Latitude',
        dataIndex: 'Latitude',
        key: 'Latitude'
        },
        
    ]
    return ( 
        <>
            <div className="w-full bg-white p-5 flex flex-col">
                <div className="p-5 ">
                    List of Agencies
                </div>
                <div className="flex flex-col">
                    <Table columns={columns}/>
                </div>
            </div>
        </>
     );
}
 
export default AgencyIndex;