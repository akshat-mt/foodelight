import React from "react";
import { SettingsScreen } from "../../features/Settings/Screens/settings.screens";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/Settings/Screens/favourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};