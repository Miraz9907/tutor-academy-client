import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const user = {displayName:'miraz'}
    const [user, setUser] = useState(null);

    const createAUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const googleLogin = (provider) =>{
       
        return signInWithPopup(auth, provider)
    }
    const signEmailPassword = (email, password) =>{
        
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const githubLogin = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("user from auth state ", currentUser);
            setUser(currentUser);
            // setLoading(false);
        });

        return () =>{
            unsubscribe();
        }
    }, [])

    
   

    const authInfo = {user, googleLogin, signEmailPassword, githubLogin, createAUser,updateUser, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;