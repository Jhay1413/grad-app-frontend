
import './App.css';

import AdminLayout from './components/admin/admin-components/adminLayout';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Link to="/admin">Click to admin</Link>
        <Routes>
          <Route exact path='/admin/*' Component={AdminLayout}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
   
  );
}

export default App;
