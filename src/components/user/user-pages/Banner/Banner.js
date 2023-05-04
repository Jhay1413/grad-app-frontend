import { Link } from 'react-router-dom';
import MapComponent from '../Maps/Map';
import './Banner.css';
const BannerPage = () => {
    return ( 
        <div className='w-full h-full'>
            <div className='w-full h-96 bg-custom-image mx-auto'>
                <div className='flex p-5 justify-center items-center h-full text-white'>
                    <div className='flex flex-col text-center'>
                        <div className='text-9xl font-serif p-5'>
                            The Explorer
                        </div>
                        <div className='text-2xl h-8 '>
                            Exchange of Probes, Learnings and Outputs of Researches
                        </div>
                        <div className='p-5'>
                            <button className=' font-medium w-42 border-2 border-neutral-700 rounded-lg text-center p-2 hover:bg-black'><Link to='researchlist'>View Research</Link></button>
                        </div>
                    </div>
                </div>
               
            </div>
           
        </div>
        
     );
}
 
export default BannerPage;