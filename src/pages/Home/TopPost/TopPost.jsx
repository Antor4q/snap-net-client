
const TopPost = () => {
    return (
        <div className=" flex items-center px-5 h-[100px] bg-gray-500 bg-opacity-10 rounded-xl">
            <div className="flex w-full items-center gap-6">
                <div className="avatar">
                <div className="w-10 h-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                </div>
                <div className="bg-gray-500 w-full bg-opacity-10 p-3 rounded-full">
                    <button className="w-full text-start">What`s on your mind, Ahmed?</button>
                </div>
            </div>
        </div>
    );
};

export default TopPost;