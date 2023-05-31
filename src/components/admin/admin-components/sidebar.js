import {Link} from 'react-router-dom';
import {UserOutlined,HomeFilled,ReadFilled,FolderOpenFilled,AppstoreFilled,CrownFilled} from '@ant-design/icons';
import { useState } from 'react';
const AdminSidebar = ({showSidebar}) => {
    const [isDropdownVisible,setIsDropdownVisible] = useState(false);
    return ( 
        <>
            <div className='flex flex-col font-sans text-gray-300'>
                <div className='w-full flex justify-start space-x-5 items-center p-5 border-b-2 border-gray-800'>
                    <UserOutlined className='bg-gray-800 rounded-lg p-5' /> 
                    <h1 className=''>ADMIN</h1>
                </div>
                <div className='p-5 border-b-2 border-gray-800 flex flex-col '>
            
                    <span className={`subspanixel-antialiased p-5 ${showSidebar ? '': 'hidden'} `}>Main Navigation</span>
                    <ul className=" space-y-3 items-center">
                        {!showSidebar ?(
                            <> 
                                <li className={`flex items-center text-3xl justify-center space-x-3 rounded-lg p-2 `}>
                                    <Link to="/admin"><HomeFilled /></Link>
                                    
                                </li>
                                <li className={`flex items-center text-3xl justify-center space-x-3 rounded-lg p-2`}>
                                    <Link to="/admin/research"><ReadFilled/></Link>
                                
                                </li>
                            </>
                

                        ):(
                            <> 
                                <li className={`flex items-center justify-start space-x-3 rounded-lg p-2`}>
                                <HomeFilled />
                                <Link className="hover:text-lg" to="/admin">Home</Link>
                                </li>
                                <li className={`flex items-center justify-start space-x-3 rounded-lg p-2`}>
                                <ReadFilled   />
                                <Link to="/admin/research" className="hover:text-lg">Research</Link>
                                </li>
                                <li className={`flex flex-col rounded-lg p-2`}>
                                   
                                    <div className='space-x-3 items-center '>
                                        <AppstoreFilled  />
                                        <button onClick={()=>setIsDropdownVisible(!isDropdownVisible)} className='hover:text-lg'>
                                            Category
                                        </button>
                                        {isDropdownVisible && (
                                            <div className=" left-0 mt-2 w-48 rounded-md shadow-lg">
                                            <Link to="/admin/category" className="block px-4 py-2 hover:text-lg">Main Category</Link>
                                            <Link to="/admin/subCategory" className="block px-4 py-2 hover:text-lg">Sub Category</Link>
                                            </div>
                                        )}
                                    </div>

                                </li>
                                <li className={`flex items-center justify-start space-x-3 rounded-lg p-2`}>
                                <CrownFilled />
                                <Link to="/admin/agency" className="hover:text-lg">Agency</Link>
                                </li>
                                <li className={`flex items-center justify-start space-x-3 rounded-lg p-2`}>
                                <FolderOpenFilled />
                                <Link to="/admin/research" className="hover:text-lg">Accounts</Link>
                                </li>
                            </>
                        )}
             
                    </ul>
                </div>
          
            </div>
        </>
     );
}
 
export default AdminSidebar;