
import React ,{ useContext }from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react'
import ResturantsInfoCard from '../Components/Resturants-info-card.componet';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../../../Services/Restaurats.context';

const ResturantInfo = styled.View`
padding: ${(props) => props.theme.space[3]};
background-color : ${(props) => props.theme.colors.bg.primary};
flex : 1;
`;

const Search = styled.View`
padding : ${(props) => props.theme.space[3]};
background-color : ${(props) => props.theme.colors.bg.primary};
`;

const Conatiner = styled.View`
flex : 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;


export default function ResturantsScreen() {
  const {restaurants , error , isLoading} = useContext(RestaurantsContext);
  return (
    <Conatiner>
      <Search>
        <Searchbar placeholder='search Hotels' />
      </Search>
      <RestaurantList
       data={restaurants}
       renderItem={( {item} ) => {
         return(
           <ResturantsInfoCard restaurant={item} />
         );
          }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}

      />
    </Conatiner>
  );
};