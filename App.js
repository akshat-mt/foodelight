
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './Source/infrastructure/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsContextProvider } from "./Source/Services/Restaurats.context";
import { LocationContextProvider } from './Source/Services/location/location.context';
import { Navigation } from './Source/infrastructure/Navigation';
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

 


  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
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
