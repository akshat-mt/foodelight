
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './Source/infrastructure/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsContextProvider } from "./Source/Services/Restaurats.context";
import { LocationContextProvider } from './Source/Services/location/location.context';
import { FavouritesContextProvider } from './Source/Services/favourites/favourites.context';
import { Navigation } from './Source/infrastructure/Navigation';
import { initializeApp } from 'firebase/app';
import * as firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthenticationContext, AuthenticationContextProvider } from './Source/Services/Authentication/authentication.context';

const firebaseConfig = {
  apiKey: "AIzaSyDy_9arlaqx0B0ewaQwOcgWnoobhDxH3EM",
  authDomain: "foodelight-90479.firebaseapp.com",
  projectId: "foodelight-90479",
  storageBucket: "foodelight-90479.appspot.com",
  messagingSenderId: "576440871714",
  appId: "1:576440871714:web:01131ba790cb8056ef937b"
};

if (!App.length) {
  initializeApp(firebaseConfig);
}

export default function App() {

  const [isAuthenticated, setIsAuthticated] = useState(false);

  // const auth = getAuth();

  // useEffect(() => {
  //   setTimeout(() => {
  //     signInWithEmailAndPassword(auth, "ak@gmail.com", "password").then((user) => {
  //       console.log("Authenticated");
  //       setIsAuthticated(true);
  //     }).catch((e) => {
  //       console.log(e);
  //     });
  //   }, 2000);
  // }, []);

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

  // if (!isAuthenticated) return null;




  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
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
