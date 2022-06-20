import { googleAuthProvider } from "../firebase/firebase";
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';

const Auth = getAuth();

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return signInWithPopup(Auth, googleAuthProvider);
    };
};


export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return signOut(Auth);
    };
};