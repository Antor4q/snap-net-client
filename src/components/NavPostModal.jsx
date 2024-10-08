

const NavPostModal = () => {
    return (
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
     {/* text here */}
      <div>
      <textarea
  placeholder="Write your thoughts"
  className="textarea textarea-bordered textarea-lg w-full "></textarea>
   
     </div>
     {/* tags here */}
     <input type="text" placeholder="Add tags" className="input input-bordered w-full mt-2" />
    {/* upload photo */}
    <div>
   

    <label  className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
            <path  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>

        <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Choose photo</h2>

        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload  your file SVG, PNG, JPG or GIF. </p>

        <input id="dropzone-file" type="file" className="hidden" />
    </label>
   </div>
   {/* upload photo in end */}
  </div>
</dialog>
    );
};

export default NavPostModal;