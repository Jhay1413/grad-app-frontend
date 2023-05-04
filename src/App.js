
import './App.css';

import AdminLayout from './components/admin/admin-components/adminLayout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './components/user';
import UserLayout from './components/user/component/UserLayout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
          <Route exact path='*' Component={UserLayout}></Route>
          <Route exact path='/admin/*' Component={AdminLayout}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>  
  );
}

export default App;
