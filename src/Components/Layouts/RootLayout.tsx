import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
           <Navbar/>
           <div className="flex-grow">
            <Outlet/>
           </div>
           <Footer/>
        </div>
    );
};

export default RootLayout;