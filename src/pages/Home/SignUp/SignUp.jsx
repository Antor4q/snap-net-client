import { Link } from "react-router-dom";
import logo from "../../../../public/logo3.png"
import bg from "../../../../public/bg2.jpg"
import { CiUser } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
      
        const userName = form.userName.value
       
        const email = form.email.value
        const password = form.password.value
        
        const user = {
          
            userName,
            email,
            password,
           
        }
        console.log(user)
    }
    return (
        <div className="bg-no-repeat bg-center" style={{backgroundImage: `url(${bg})`}}>
            
            <div className=" dark:bg-gray-900">
                <div className="container grid items-center justify-center min-h-screen px-6 mx-auto">
                    <form onSubmit={handleSignUp} className="w-full max-w-md">
                        <img className="w-16" src={logo} alt/>

                        <h1 className="mt-3 text-2xl font-semibold text-white capitalize sm:text-3xl dark:text-white">sign Up</h1>

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                               
                                <CiUser  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                            </span>

                            <input type="text" name="userName" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder=" username"/>
                        </div>
                       
                      
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                        </div>
                      
                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-lg hover:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-50">
                                Sign up
                            </button>

                            <p className="mt-4 text-center text-white dark:text-gray-400">or sign in with</p>

                            
                        </div>
                    </form>
                    <div>
                        <button className="flex w-full items-center justify-center px-6 py-3  text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200  dark:hover:bg-gray-600">
                                    
                               <FcGoogle className="w-6 h-6 mx-2" />

                               <span className="mx-2 text-white">Sign in with Google</span>
                           </button>

                           <div className="mt-6 text-center ">
                               <p  className="text-sm text-white  dark:text-blue-400">
                                   Already have an account ? <Link className="hover:underline text-yellow-500" to="/signIn">Sign in</Link>
                               </p>
                           </div>
                           <button>Toast</button>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default SignUp;