import React , {useState , createContext} from "react";
import firebase from "firebase/app";
import { loginRequest } from "./authentication.services";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ( {children} ) => {
    const [isLoading , setIsLoading] = useState(false);
    const [user , setUser] = useState(null);
    const [error , setError] = useState(null);

    const onLogin = (email , password) => {
        setIsLoading(true);
        loginRequest(email , password).then((user)=>{
            setUser(user);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e);
        });
    };
    return (
        <AuthenticationContext.Provider
            value = {{
                    user,
                    isLoading,
                    error,
                    onLogin
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}