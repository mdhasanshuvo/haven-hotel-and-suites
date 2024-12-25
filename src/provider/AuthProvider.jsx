import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [email, setEmail] = useState('')

    console.log(user);


    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true);
        signOut(auth);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = () => {
        return signInWithPopup(auth, provider);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                    });

            }
            else{
                axios.post('http://localhost:5000/logout',{},{
                    withCredentials: true,
                })
                .then(res => {
                    console.log('logout ',res.data);
                    setLoading(false);
                })
            }

            
        })

        return () => {
            unSubscribe();
        }

    }, []);



    const authValues = {
        user,
        setUser,
        signUp,
        logout,
        signIn,
        googleAuth,
        loading,
        updateUser,
        email,
        setEmail,
    }

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 