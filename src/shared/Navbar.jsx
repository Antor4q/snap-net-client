import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png"
import { FaHome, FaSearch } from "react-icons/fa";
import { MdLogout, MdOutlineDarkMode, MdOutlineExplore, MdSettings } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { CgMoreR } from "react-icons/cg";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="min-h-screen ">
            <Link to="/" className="w-36  h-28"><img className="w-36 h-28" src={logo} alt="" /></Link>
          
           <div className="mt-8">
                <ul className="text-xl flex pr-6 flex-col gap-6 font-bold">
                    <li><NavLink to="/" className="flex items-center hover:bg-white rounded-xl p-3 hover:bg-opacity-10 gap-5"><FaHome/>Home</NavLink></li>
                    <li><NavLink className="flex items-center hover:bg-white rounded-xl p-3 hover:bg-opacity-10 gap-5"><FaSearch/>Search</NavLink></li>
                    <li><NavLink to="/explore" className="flex items-center hover:bg-white rounded-xl p-3 hover:bg-opacity-10 gap-5"><MdOutlineExplore />Explore</NavLink></li>
                    <li><NavLink to="/messages" className="flex items-center hover:bg-white rounded-xl p-3 hover:bg-opacity-10 gap-5"><AiOutlineMessage /> Messages</NavLink></li>
                    <li><NavLink to="/notifications" className="flex items-center hover:bg-white rounded-xl p-3 hover:bg-opacity-10 gap-5"><IoMdNotificationsOutline /> Notifications</NavLink></li>
                    <li><NavLink className="flex items-center hover:bg-white rounded-xl p-3 hover:bg-opacity-10 gap-5"><GoPlusCircle /> Post now</NavLink></li>
                    <li><NavLink to="/bookmarks" className="flex items-center hover:bg-white rounded-xl p-3 hover:bg-opacity-10 gap-5"><CiBookmark /> Bookmarks</NavLink></li>
                    <li><NavLink to="/profile" className="flex items-center hover:bg-white rounded-xl p-3 hover:bg-opacity-10 gap-5"><img className="w-5 rounded-full " src="https://i.ibb.co/m51D1ZV/black2.jpg" alt="" /> Profile</NavLink></li>
                </ul>
            </div>
            <div className="mt-[30%] dropdown dropdown-top">
                <button tabIndex={0} role="button" className="flex text-xl font-bold items-center gap-5"><CgMoreR />More</button>
                <ul tabIndex={0} className="dropdown-content   text-xl gap-2 font-semibold    menu rounded-box z-[1] w-60 p-2 ">
                    <li><NavLink className="flex items-center  rounded-xl p-3   gap-5"><BiSolidBadgeCheck />Apply for badge</NavLink></li>
                    <li><NavLink className="flex items-center  rounded-xl p-3  gap-5"><MdSettings/>Settings</NavLink></li>
                    <li><button className="flex items-center  rounded-xl p-3  gap-5"><MdLogout /> Log Out</button></li>
                    <li><button className="flex items-center  rounded-xl p-3  gap-2"><MdOutlineDarkMode /> Dark mode</button></li>
                </ul>
            </div>
          
        </div>
    );
};

export default Navbar;