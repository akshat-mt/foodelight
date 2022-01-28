import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { ResturantsScreen } from '../../features/Resturants/Screens/Resturants.Screens'
import { RestaurantNavigator } from "./restaurants.navigator";
import { Button } from "react-native";
import { AuthenticationContext } from "../../Services/Authentication/authentication.context";
import { RestaurantsContextProvider } from "../../Services/Restaurats.context";
import { LocationContextProvider } from "../../Services/location/location.context";
import { FavouritesContextProvider } from "../../Services/favourites/favourites.context";
import { MapScreen } from '../../features/Map/Screens/screen.map'
const Tab = createBottomTabNavigator();


const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <>
      <Text>Settings</Text>
      <Button title="Logout" onPress={() => onLogout()} />
    </>
  );
}





const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>

);


