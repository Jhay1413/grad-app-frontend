import logo from '../../../assets/logo.png'
const Header = () => {
    return ( 
        <>
                <div className='flex px-5  '>
                    <img src={logo} alt="Logo" className='h-16  '/>
                </div>
                <div className='flex h-full'>
                <ul className="flex p-5 justify-center items-center h-full space-x-5">
                        <li>Home</li>
                        <li>Login</li>
                    </ul>
                </div>
           
        </>
     );
}
 
export default Header;