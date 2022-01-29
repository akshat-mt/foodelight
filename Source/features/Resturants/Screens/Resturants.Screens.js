
import React, { useContext } from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList, Pressable } from 'react-native';
import { Colors, Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import ResturantsInfoCard from '../Components/Resturants-info-card.componet';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../../../Services/Restaurats.context';
import Search from '../Components/search.components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FavouritesContext } from '../../../Services/favourites/favourites.context';
import { FavouritesBar } from '../../../Components/favourites/favourites-bar.components';
import { RestaurantList } from '../Components/restaurant-list-styles.components';
import { FadeInView } from '../../../animations/fade.animation';

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


export const RestaurantsScreen = ({ navigation }) => {
  const {isLoading , restaurants} = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext); 
  const [isToggle , setIsToggle] = useState(false);
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
      <Search 
      isFavouritesToogled={isToggle}
      onFavouritesToggle={()=>setIsToggle(!isToggle)}/>
      {
        isToggle &&   <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      }

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {

          return (
            <TouchableOpacity onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
            >
              <FadeInView>
                  <ResturantsInfoCard restaurant={item} />
                </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}

      />
    </Conatiner>
  );
};