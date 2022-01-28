import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React , {useState , createContext} from "react";
import { loginRequest } from "./authentication.services";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ( {children} ) => {
    const [isLoading , setIsLoading] = useState(false);
    const [user , setUser] = useState(null);
    const [error , setError] = useState(null);
    const auth = getAuth();
    getAuth().onAuthStateChanged((usr) => {
        if(usr) {
            setUser(usr);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
        }
    });

   
    const onLogin = (email , password) => {
        console.log(email);
        console.log(password)
        setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password).then((u)=>{
            setUser(u);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        });
    };

    const onRegister = (email,password,repeatedPassword) => {
        setIsLoading(true);
        if(password!=repeatedPassword) {
            setError ("Error !! Password do not match");
            return;
        }
        createUserWithEmailAndPassword(auth ,email , password ).then((u) => {
            setUser(u);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        })
    }

    const onLogout = () => {
        setUser(null);
        getAuth().signOut();
    }

    return (
        <AuthenticationContext.Provider
            value = {{
                    isAuthenticated : !!user,
                    user,
                    isLoading,
                    error,
                    onLogin,
                    onRegister,
                    setIsLoading,
                    onLogout
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};