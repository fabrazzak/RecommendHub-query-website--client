import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../../firebase.config.js';

export  const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)
    const [user, setUser] = useState([]);

    // product data



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login user

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //   login with gmail
    const loginWithGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

    }





    // signout user

    const singOut = () => {
        return signOut(auth)

    }


    //  update password

    const updatePass = (email) => {

        return sendPasswordResetEmail(auth, email)

    }



    // update profile

    const profileUpdate = (profileInfo) => {
        return updateProfile(user, profileInfo)

    }

    //  Get the currently signed -in use


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()


        }


    }, [])




    const info = {  createUser, loginUser, loginWithGoogle, user, singOut, loading, updatePass, profileUpdate }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;