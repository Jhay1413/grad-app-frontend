import { Switch } from 'antd';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ShowToast = () => {
    return ( 
        <>
            <ToastContainer   position='top-center' />
        </>
     );
}
export const HandleToastMessage = (status,message)=>{
    if(status === 201 || status === 200){
        toast.success(message)
    }
    else{
        toast.error(message);
    }
}
export default ShowToast;