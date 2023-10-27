import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,getIdToken  } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const userAuthContext = createContext();
export const UserAuthContextProvider = ({ children }) => {
    const [user,setUser]=useState("")
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword( auth,email,password).then(() => {
            return updateToken();
        });
    }
    const logIn = (email,password) => {
        return signInWithEmailAndPassword( auth,email,password).then(() => {
            return updateToken();
        });
    }
    const logOut =()=>{
        return signOut(auth);
        localStorage.removeItem('authToken');
    }

    const updateToken = async () => {
        const user = auth.currentUser;
        if (user) {
            const idToken = await getIdToken(user);
            localStorage.setItem('authToken', idToken);
        }
    }

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setUser(auth.currentUser);
        }

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        }
    }, []);
    return (
        <userAuthContext.Provider value={{user,signUp,logIn,logOut}}>{children}</userAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(userAuthContext);
}
