"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { getAuth } from "firebase/auth"; // Import getAuth directly
import { app } from "@/lib/firebase"; // Import the initialized app

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Initialize auth instance
    const auth = app ? getAuth(app) : null;

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    const signUp = (email, password) => {
        if (!auth) return Promise.reject(new Error("Firebase not initialized"));
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        if (!auth) return Promise.reject(new Error("Firebase not initialized"));
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        if (!auth) return Promise.reject(new Error("Firebase not initialized"));
        return signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
