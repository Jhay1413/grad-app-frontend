import {Link} from 'react-router-dom';
import {useState} from 'react'
import {addUsers} from '../../../../api/register'
import { HandleToastMessage } from '../../toast/toast';

const RegistrationForm = () => {

    const [formValues,setFormValues] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    });

    const handleInputChange = (event) =>{
        const {name,value} = event.target;
        setFormValues((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
      
            try {
                const response = await addUsers(formValues);
                console.log(response);
                if(response.status && response.data){
                    HandleToastMessage(response.status,response.data.message);
                }
                else{
                    HandleToastMessage(response.response.status,response.response.data.message);
                }
                  
    
            } catch (error) {
               console.log(error)
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
                           Account Registration
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="w-full flex flex-col space-y-3">
                                <input 
                                    type="text" 
                                    className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    placeholder="First Name"
                                    name="firstName"
                                    onChange={handleInputChange}
                                />
                                 <input 
                                    type="text" 
                                    className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    placeholder="Last Name"
                                    name="lastName"
                                    onChange={handleInputChange}
                                />
                                <input 
                                    type="email" 
                                    className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleInputChange}
                                    
                                />
                                <input 
                                    type="password" 
                                    className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleInputChange}
                                />
                                <button 
                                    className="w-full bg-red-700 text-white p-2 rounded text-lg"
                                    type="submit">
                                    REGISTER
                                </button>
                            </div>
                          
                        </form>
                        <div className="w-full flex justify-between">
                            <span><Link to="/" className="text-red-500">Forgot Password ?</Link></span>
                            <span>Already a Member? <Link to="/auth" className="text-red-500">Sign in</Link></span> 
                        </div>
                    </div> 
                </div> 
            </div>
        </>
     );
}
 
export default RegistrationForm;