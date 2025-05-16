import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const RootLayout = () => {
    return (
        <div>
           <Navbar/>
           <div className="min-h-screen">
            <Outlet/>
           </div>
           <Footer/>
        </div>
    );
};

export default RootLayout;