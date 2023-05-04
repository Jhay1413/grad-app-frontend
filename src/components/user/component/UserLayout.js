import { Route, Routes } from "react-router-dom";
import BannerPage from "../user-pages/Banner/Banner";
import Header from "./Header";
import MapComponent from "../user-pages/Maps/Map";
import ResearchListIndex from "../user-pages/ResearchList";
import ResearchDetails from "../user-pages/ResearchDetails";

const UserLayout = () => {
    
    return ( 
        <>
            <div className="fixed top-0 left-0 w-full flex justify-between h-16 bg-white z-10">
                <Header/>
            </div>
            <div className="pt-16">
                <BannerPage/>
            </div>
            <div className='h-full w-full mx-auto bg-gray-200'>
                    <div className='w-full h-full p-5'>
                    <Routes>
                        <Route path="/" element={<MapComponent/>} />
                        <Route path="/researchlist" element={<ResearchListIndex/>} />
                        <Route path="/:name" element={<ResearchDetails/>} />
                    </Routes>
                    </div>
            </div>
           
        </>
     );
}
 
export default UserLayout;