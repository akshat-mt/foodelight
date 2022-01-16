import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {RestaurantsScreen} from "../../features/Resturants/Screens/Resturants.Screens";
import { Text } from 'react-native-paper';
const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator  headerMode="none">
            <RestaurantStack.Screen 
            name="Restaurants"
            component={RestaurantsScreen}/>
            <RestaurantStack.Screen name="RestaurantDetail" component ={() => <Text>Restaurants Detail</Text>} />
        </RestaurantStack.Navigator >
    )
}