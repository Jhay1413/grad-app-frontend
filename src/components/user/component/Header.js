import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <>
                <div className='flex px-5  '>
                    <img src={logo} alt="Logo" className='h-16  '/>
                </div>
                <div className='flex h-full'>
                <ul className="flex p-5 justify-center items-center h-full space-x-5">
                        <li>Home</li>
                        <li><Link to ='/login'>Login</Link></li>
                    </ul>
                </div>
           
        </>
     );
}
 
export default Header;