import React from "react";
// import { Text ,StyleSheet , View , Image} from 'react-native'
import { Card, Paragraph } from "react-native-paper";
import { SvgXml } from 'react-native-svg';
// import styled from "styled-components/native";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../Components/spacer/Space.components";
import { Text } from "../../../Components/typography/text.components";
import { Favourite } from "../../../Components/favourites/favourite.components";
import {
  ResturantCard,
  ResturantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./Resturants-info-card.styles";


const ResturantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some resturant',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    address = "some random address",
    rating = '4',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
    ],
    isOpenNow = true,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <ResturantCard elevation={5}>
      <Favourite restaurant={restaurant}/>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml xml={star} width={20} height={20} key={`star-${placeId}-${i}`} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>

      </Info>

    </ResturantCard>
  );
}


export default ResturantsInfoCard;