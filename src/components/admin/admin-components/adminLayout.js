import React from 'react';
import PropTypes from 'prop-types';
import AdminSidebar from './sidebar';
import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminIndex from '../admin-pages';
import ResearchPage from '../admin-pages/research/research';
import {Spin} from 'antd';
import LoadingComponent from '../../common/loading/loading';
const AdminLayout = () => {
    const [showSidebar,setShowSideBar] = useState(true);
    const [loading,setLoading] = useState(false);
    return (
      <>
        <div className="flex min-h-screen">
        <div className={`bg-gray-900 text-white transition-all  ${showSidebar ? 'w-72' : 'w-20'}`}>
            <AdminSidebar showSidebar = {showSidebar}/> 
        </div>
        <div className="flex flex-col w-full">
          <div className="flex bg-white p-4 h-20  ">
            <button className="text-3xl px-3 py-2 " onClick={() => setShowSideBar(!showSidebar)}>
              <span>{showSidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}</span>
            </button>
          </div>
          <div className="p-4 flex-grow bg-gray-200">
          {loading ? (
                <LoadingComponent/>
              
            ):(
           
            <Routes>
                <Route  path="/" element={<AdminIndex/>} />
                <Route  path="/research"  element={<ResearchPage loading={loading} setLoading={setLoading}/>} />
            </Routes>
            )
          }
          </div>
        </div>
      </div>
        </>
     );
}
 
export default AdminLayout;