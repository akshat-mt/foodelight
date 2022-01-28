import React from 'react';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/Resturants/Screens/Resturants.Screens";
import { Text } from 'react-native-paper';
import { RestaurantDetailScreen } from '../../features/Resturants/Screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();
export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator 
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
               headerShown:false
            }}>
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantsScreen} />
            <RestaurantStack.Screen name="RestaurantDetail" 
            component={RestaurantDetailScreen} />
        </RestaurantStack.Navigator >
    );
};