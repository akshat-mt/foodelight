import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../Components/search.components";
import { RestaurantsContext } from "../../../Services/Restaurats.context"
import { LocationContext } from "../../../Services/location/location.context";
import { useContext } from "react";
// const Map = styled(MapView)`
// height : 100%,
// width : 100%
// `;

export const MapScreen = () => {
    const {location} = useContext(LocationContext);
    const {restaurants = []} = useContext(RestaurantsContext);
    const [latDelta , setLatDelta] = useState(0);

    const { lat , lng ,viewport } = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        const latDelta = northeastLat - southwestLat;
        setLatDelta(latDelta)
    },[location,viewport])
return (
<>
<Search />
<MapView style={{height:'100%' , width:'100%'}}
    region={{
        latitude: lat,
        longitude : lng,
        latitudeDelta : latDelta,
        longitudeDelta : 0.02,
    }}
>
    {restaurants.map((restaurant) =>{
        return ( <MapView.Marker
            key = {restaurant.name}
            title = {restaurant.name}
            coordinate={{
                latitude : restaurant.geometry.location.lat,
                longitude : restaurant.geometry.location.lng,
            }}
            />
        );
    })}
</MapView>

</>
);
};
