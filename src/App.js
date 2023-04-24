
import './App.css';

import AdminLayout from './components/admin/admin-components/adminLayout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './components/common/landing-page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
          <Route exact path='/' Component={LandingPage}></Route>
          <Route exact path='/admin/*' Component={AdminLayout}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
   
  );
}

export default App;
