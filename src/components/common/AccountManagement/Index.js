import LoginImg from '../../../assets/LoginLogo.png'
import BackgroundImg from '../../../assets/evsubackground.jpg'
import LoginPage from './login';
import {Routes,Route} from 'react-router-dom';
import RegistrationForm from './register';
import ShowToast from '../toast/toast';

const LoginLayout = () => {
    return ( 
        <div className='w-full h-screen p-5 flex items-center  loginLayout'>
            <ShowToast/>
            <div className="mx-auto w-8/12 flex flex-row  justify-between rounded-lg  border-slate-100 bg-white">
                <div className="w-2/4">
                    <img src={LoginImg} className='w-full h-full rounded-lg'/>
                </div>
                
                <div className="w-2/4">
                <Routes>
                    <Route  path='/' element={<LoginPage/>}></Route>
                    <Route  path='/register' element={<RegistrationForm/>}></Route>
                </Routes>
                </div>
            </div>
           
        </div>
     );
}
 
export default LoginLayout;