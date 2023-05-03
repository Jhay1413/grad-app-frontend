import MapComponent from '../Maps/Map';
import './Banner.css';
const BannerPage = () => {
    return ( 
        <div className='w-full h-screen'>
            <div className='w-full h-72 bg-custom-image mx-auto'>
                <div className='flex p-5 justify-center items-center h-full text-white'>
                    <div className='flex flex-col text-center'>
                        <div className='text-9xl font-serif p-5'>
                            The Explorer
                        </div>
                        <div className='text-xl bg-white text-black h-8'>
                            Exchange of Probes, Learnings and Outputs of Researches
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='h-screen w-full mx-auto text-white  '>
                <div className='flex flex-col  h-5/6 w-full'>
                    <div className=' text-center text-5xl font-serif text-black'>

                    </div>
                    <div className='w-full h-full '>
                        <MapComponent/>
                    </div>

                </div>
                    
                   
                </div>
        </div>
        
     );
}
 
export default BannerPage;