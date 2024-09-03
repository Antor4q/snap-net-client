import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import RightNav from "./pages/Home/RightNav/RightNav";



const Root = () => {
    return (
       <div className=" min-h-screen ">
           <div className="flex px-16 min-h-screen border-white border-4 gap-10">
           <div className="w-3/12 fixed border-r">
             
              <Navbar/>
           </div>
           <div className="w-6/12 ml-[430px]  px-14">
              <Outlet/>
           </div>
           <div className="w-3/12 pt-10">
              <p className="mb-5">Suggested for you</p>
              <RightNav/>
           </div>
         
        </div>
       </div>
    );
};

export default Root;