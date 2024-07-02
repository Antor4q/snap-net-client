import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaLink } from "react-icons/fa";
import ProfileTab from "../../../components/ProfileTab";
import ContactModal from "../ContactModal/ContactModal";


const Profile = () => {
    
    return (
        <div className="border min-h-screen ">
            <div >
                <div className="relative">
                    <img className="h-[350px] w-full" src="https://i.ibb.co/RH7yWdm/Whats-App-Image-2024-04-24-at-22-55-41-b8f97c23.jpg" alt="" />
                    
                    <div className="avatar absolute -bottom-16 left-5">
                        <div className="w-36 rounded-full">
                            <img src="https://i.ibb.co/m51D1ZV/black2.jpg" />
                        </div>
                        </div>
             
                </div>
                {/* name and user name */}
                <div className="mt-16 px-5">
                    <h3 className="text-2xl font-bold flex gap-1 items-center">Ahmed Antor <BiSolidBadgeCheck className="text-pink-600" /></h3>
                    <p className="my-1">@ahmedAntor</p>
                </div>
                {/* bio here */}
                <div className="px-5">
                    <p className=" font-medium">Junior Front End Web Developer with expertise in React, MongoDB, JavaScript, Tailwind CSS and CSS/HTML. Passionate about creating seamless user experiences and building responsive web applications.</p>
                </div>
                {/* address */}
                <div className="px-5 my-1 flex gap-2">
                <p>Narayanganj District, Dhaka, Bangladesh</p>
                
                <ContactModal/>
                </div>
                <a target="_blank" className="flex px-5 gap-1 items-center" href="https://www.linkedin.com/in/ahmedantor"><FaLink /> <span className="text-primary">https://www.linkedin.com/in/ahmedantor</span></a>
                <div className="px-5 mt-5 flex gap-5">
                    <p><span className="font-semibold">4M</span> Followers </p>
                    <p><span className="font-semibold">10</span> Following </p>
                    <p><span className="font-semibold">54</span> Posts </p>
                </div>
                <div className="px5 mt-5 ">
                    <ProfileTab/>
                </div>
            </div>
        </div>
    );
};

export default Profile;