
import './App.css';

import AdminLayout from './components/admin/admin-components/adminLayout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './components/user';
import UserLayout from './components/user/component/UserLayout';
import LoginLayout from './components/common/Login/Index';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route  path='*' element={<UserLayout/>}></Route>
          <Route  path='/admin/*' element={<AdminLayout/>}></Route>
          <Route  path='/login/*' element={<LoginLayout/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
