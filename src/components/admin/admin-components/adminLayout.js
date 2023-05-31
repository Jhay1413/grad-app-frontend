import React, { useEffect } from 'react';
import AdminSidebar from './sidebar';
import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
import { useState } from 'react';
import {Route, Routes ,useNavigate} from 'react-router-dom';
import AdminIndex from '../admin-pages';
import ResearchPage from '../admin-pages/research/research';
import AgencyIndex from '../admin-pages/agency/agency';
import jwtDecode from 'jwt-decode';
import CategoryIndexPage from '../admin-pages/category';
import SubCategoryIndex from '../admin-pages/subCategory';

const AdminLayout = () => {
    const navigate = useNavigate();
    const [showSidebar,setShowSideBar] = useState(true);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
      const token = localStorage.getItem('token');
      if(token){
        try {
          const user = jwtDecode(token);
          if(!user){
            localStorage.removeItem('token');
            navigate('/auth');
          }
          
        } catch (error) {
          console.error("Error decoding jwt token ",error)
          localStorage.removeItem('token');
          navigate('/auth');
        }
       
      }
      else{
        navigate('/auth');
      }
    },[])
    return (
      <>
        <div className="flex min-h-screen">
        <div className={`bg-gray-900 text-white transition-all  ${showSidebar ? 'w-1/6' : 'w-0'}`}>
            <AdminSidebar showSidebar = {showSidebar}/> 
        </div>
        <div className="flex flex-col w-full">
          <div className="flex bg-white p-4 h-20  ">
            <button className="text-3xl px-3 py-2 " onClick={() => setShowSideBar(!showSidebar)}>
              <span>{showSidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}</span>
            </button>
          </div>
          <div className="p-4 flex-grow bg-gray-200 w-full ">
            <Routes>
                <Route  path="/" element={<AdminIndex/>} />
                <Route  path="/research"  element={<ResearchPage loading={loading} setLoading={setLoading}/>} />
                <Route  path="/category"  element={<CategoryIndexPage />} />
                <Route  path="/subCategory"  element={<SubCategoryIndex loading={loading} setLoading={setLoading}/>} />
            </Routes>
        
          </div>
        </div>
      </div>
        </>
     );
}
 
export default AdminLayout;