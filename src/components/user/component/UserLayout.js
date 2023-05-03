import BannerPage from "../user-pages/Banner/Banner";
import Header from "./Header";

const UserLayout = () => {
    
    return ( 
        <>
            <div className="fixed top-0 left-0 w-full flex justify-between h-16 bg-white">
                <Header/>
            </div>
            <div className="pt-16">
                <BannerPage/>
            </div>
           
        </>
     );
}
 
export default UserLayout;