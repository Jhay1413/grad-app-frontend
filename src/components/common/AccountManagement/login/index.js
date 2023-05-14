import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth } from "../../../../api/login";
import { HandleToastMessage } from "../../toast/toast";
import jwtDecode from "jwt-decode";

const LoginPage = () => {
    const navigate = useNavigate()
    const [credentials,setCredentials] = useState({
        email:'',
        password:'',

    })
    useEffect(()=>{
        const token = localStorage.getItem('token');

        if(token){
            try {
                const user = jwtDecode(token);
                if(user){
                    
                    navigate('/admin')
                }
                else{
                   localStorage.removeItem('token');
                   navigate('/auth')
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
    const handleInputChange = (event )=>{
        const {name,value} = event.target;

        setCredentials((prevState) =>({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await loginAuth(credentials);
            
            if(response.status === 200){
                localStorage.setItem('token',response.data.data);
                HandleToastMessage(response.status,response.data.message);
                navigate('/admin');
            }
            else{
                HandleToastMessage(response.response.status,response.response.data.message);
            }
        } catch (error) {
            
        }
    }

    return ( 
        <>
            <div className="w-8/12 h-full flex flex-col mx-auto items-center justify-center">
                <div className="w-full h-1/5 flex items-center justify-center ">
                    <div className="flex items-center justify-center text-5xl font-bold text-red-700">
                        ADMIN PORTAL
                    </div>
                </div>
                <div className="w-full h-3/5 flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col space-y-3 ">
                        <div className="text-2xl">
                            Sign In
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="w-full flex flex-col space-y-3">
                                <input 
                                    type="email" 
                                    className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Email"
                                    name = "email"
                                    onChange={handleInputChange}/>
                                <input 
                                    type="password" 
                                    className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Password"
                                    name = "password"
                                    onChange={handleInputChange}/>
                                <button 
                                    className="w-full bg-red-700 text-white p-2 rounded text-lg"
                                    type="submit">
                                    LOGIN
                                </button>
                            </div>
                          
                        </form>
                        <div className="w-full flex justify-between">
                            <span><Link to="/" className="text-red-500">Forgot Password ?</Link></span>
                            <span>New ? <Link to="/auth/register" className="text-red-500">Register</Link></span> 
                        </div>
                    </div> 
                </div> 
            </div>
                
        </>
     );
}
 
export default LoginPage;