import PropTypes from "prop-types"
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import logo from "../../public/logo2.png"
const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
   
    if(loading){
        return <>
         <div className="min-h-screen flex justify-center items-center">
         <img className="w-32  animate-ping" src={logo} alt="" />
         </div>
        </>
    }
   if(user){
        return children
    }
     return <Navigate to="/signIn" ></Navigate>
 
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children : PropTypes.node
}