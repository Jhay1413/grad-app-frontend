import {Spin} from 'antd';
const LoadingComponent  = ({text}) => {
    return ( 
        <div className="flex items-center ">
            <Spin className='mx-auto ' size="large" />
           
        </div>
     );
}
 
export default LoadingComponent ;