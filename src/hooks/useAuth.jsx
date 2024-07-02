import { useContext } from "react";
import { SnapContext } from "../provider/AuthProvider";


const useAuth = () => {
    const auth = useContext(SnapContext)
    return auth
};

export default useAuth;