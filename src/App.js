
import './App.css';

import AdminLayout from './components/admin/admin-components/adminLayout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
          <Route exact path='/admin/*' Component={AdminLayout}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
   
  );
}

export default App;
