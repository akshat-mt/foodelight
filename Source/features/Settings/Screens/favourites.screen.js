import { FavouritesContext } from "../../../Services/favourites/favourites.context";

import {Text} from "../../../Components/typography/text.components"
import { Spacer } from "../../../Components/spacer/Space.components";

import { RestaurantList } from "../../Resturants/Components/restaurant-list-styles.components";
import ResturantsInfoCard from "../../Resturants/Components/Resturants-info-card.componet";


import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

const NoFavouritesArea = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
    console.log(favourites.length)
  return favourites.length ? (
    <>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <ResturantsInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};