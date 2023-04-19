import {Spin} from 'antd';
const LoadingComponent  = ({text}) => {
    return ( 
        <div className="flex items-center h-screen">
            <Spin className='mx-auto' size="large"/>
            <div>{text}</div>
        </div>
     );
}
 
export default LoadingComponent ;