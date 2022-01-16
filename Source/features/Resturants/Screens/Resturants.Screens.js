
import React, { useContext } from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList, Pressable } from 'react-native';
import { Colors, Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import ResturantsInfoCard from '../Components/Resturants-info-card.componet';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../../../Services/Restaurats.context';
import Search from '../Components/search.components';
const ResturantInfo = styled.View`
padding: ${(props) => props.theme.space[3]};
background-color : ${(props) => props.theme.colors.bg.primary};
flex : 1;
`;

// const Search = styled.View`
// padding : ${(props) => props.theme.space[3]};
// background-color : ${(props) => props.theme.colors.bg.primary};
// `;

const Conatiner = styled.View`
flex : 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;


export const RestaurantsScreen = ( {navigation} ) => {
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);
  console.log(navigation);
  return (
    <Conatiner>
      {
        isLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25 }}
              animating={true}
              color={Colors.blue300}
            />
          </View>
        )
      }
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          
          return (
            <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
            <ResturantsInfoCard restaurant={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}

      />
    </Conatiner>
  );
};