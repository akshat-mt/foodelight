import React , {useContext} from "react";
import {AppNavigator} from "./app.navigator";
import {View , Text} from "react-native";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../Services/Authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext);
    
    return (
        <NavigationContainer>
            {
                 isAuthenticated ? <AppNavigator /> : (
                    <AccountNavigator />
                 )
            }
        </NavigationContainer>
    )
    
    
   
};