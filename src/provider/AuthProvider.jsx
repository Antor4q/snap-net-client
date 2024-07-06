import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
export const SnapContext  = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const profileUpdate = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])

    const userInfo = {
        user,
        loading,
        setUser, 
        setLoading,
        signUp,
        signIn,
        googleSignIn,
        profileUpdate,
        logOut,
    }
    return (
        <SnapContext.Provider value={userInfo}>
            {children}
        </SnapContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children : PropTypes.node
}