import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark, FaRegCommentDots } from "react-icons/fa";


const Posts = () => {
    return (
       <div>
           <div className="my-10 p-5 bg-gray-500 bg-opacity-10 rounded-xl">
            <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <div className="avatar cursor-pointer">
                <div className="w-10 h-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                </div>
                 <div>
                  <h3 className="text-lg flex gap-1 items-center hover:underline cursor-pointer">Ahmed Antor <BiSolidBadgeCheck className="text-pink-600" /></h3>
                  <p >2 hours ago</p>
                 </div>
                 
            </div>
            <button className="text-lg font-semibold"><BsThreeDots /></button>
            </div>
           <div className="my-5">
            {/* title here*/}
           <p className="ml-10 ">Hey everyone! I`m excited to share the new logo for my latest project, SnapNet. SnapNet is a cutting-edge social media platform designed to connect people in innovative ways. Stay tuned for more updates and get ready to experience a new era of social networking with SnapNet!</p>
           {/* tags here */}
            <div className="flex text-pink-400 mt-5 ml-10 w-3/4  gap-2">
                <p>#snapnet</p>
                <p>#socialmedia</p>
                <p>#networking</p>
                <p>#onlineSocialMedia</p>
            </div>
            {/* image here */}
            <div className="mt-5 ">
                <img className=" " src="https://i.ibb.co/bbddvy9/Screenshot-2024-06-26-002406.png" alt="" />
            </div>
            {/* actions here */}
            <div className="flex items-center pt-4 px-4 justify-between text-xl font-semibold">
                <div className="flex items-center gap-6">
                <p className="flex items-center gap-2"><AiOutlineLike /> 133</p>
                <p className="flex items-center gap-3"><AiOutlineDislike /> 11</p>
                <p className="flex items-center gap-2 "><FaRegCommentDots /> 180 <span className="text-base font-normal">comments</span></p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="flex items-center gap-1"><CiShare2 /> 60 <span className="text-base font-normal">shares</span></p>
                    <p className="flex items-center gap-1"><FaRegBookmark /> 43 <span className="text-base font-normal">bookmarks</span></p>
                </div>
            </div>
           </div>
          </div>
           <div className="my-10 p-5 bg-gray-500 bg-opacity-10 rounded-xl">
            <div className="flex justify-between ">
            <div className="flex items-center gap-4">
              <div className="avatar cursor-pointer">
                <div className="w-10 h-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                </div>
                 <div>
                  <h3 className="text-lg flex gap-1 items-center hover:underline cursor-pointer">Ahmed Antor <BiSolidBadgeCheck className="text-pink-600" /></h3>
                  <p >1 hours ago</p>
                 </div>
                 
            </div>
             <button className="text-lg font-semibold"><BsThreeDots /></button>
            </div>
           <div className="my-5">
            {/* title here*/}
           <p className="ml-10 ">Alhamdulillah,I have completed the first step of my goal as a junior React developer/programmer. Over the past 6 months, I dedicated 6 to 8 hours, and sometimes even 10 hours, to hard work every day. This journey has been challenging yet incredibly rewarding. I am grateful for the support and guidance from my mentors and peers. Looking forward to the next steps and continued growth in my career!</p>
           {/* tags here */}
            <div className="flex text-pink-400 mt-5 ml-10 w-3/4  gap-2">
                <p>##Achievement</p>
                <p>#ReactDeveloper </p>
                <p>#ProgrammingJourney</p>
                <p>#HardWorkPaysOff</p>
                <p>#CodingLife </p>
            </div>
            {/* image here */}
            <div className="mt-5 ">
                <img className=" " src="https://i.ibb.co/zb6VRr7/Screenshot-2024-06-24-162116.png" alt="" />
            </div>
            {/* actions here */}
            <div className="flex items-center pt-4 px-4 justify-between text-xl font-semibold">
                <div className="flex items-center gap-6">
                <p className="flex items-center gap-2"><AiOutlineLike /> 111</p>
                <p className="flex items-center gap-3"><AiOutlineDislike /> 12</p>
                <p className="flex items-center gap-2 "><FaRegCommentDots /> 150 <span className="text-base font-normal">comments</span></p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="flex items-center gap-1"><CiShare2 /> 30 <span className="text-base font-normal">shares</span></p>
                    <p className="flex items-center gap-1"><FaRegBookmark /> 13 <span className="text-base font-normal">bookmarks</span></p>
                </div>
            </div>
           </div>
          </div>
       </div>
    );
};

export default Posts;