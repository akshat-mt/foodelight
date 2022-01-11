
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react'
import ResturantsScreen from './Source/features/Resturants/Screens/Resturants.Screens';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './Source/infrastructure/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./Source/Services/Restaurats.context"
export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded) {
    return null;
  }

  if (!latoLoaded) {
    return null;
  }

  const Map = () => {
    return (
      <Text>Map</Text>
    );
  }
  const Settings = () => {
    return (
      <Text>Map</Text>
    );
  }
  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };


  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={ResturantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  Search: {
    padding: 16,
    backgroundColor: 'white'
  },
  rest: {
    padding: 16,
    backgroundColor: 'blue',
    flex: 1
  }
});
