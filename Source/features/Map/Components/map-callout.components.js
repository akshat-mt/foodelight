import React from "react";
import { CompactRestaurantInfo } from "../../../Components/restaurant/compact-restaurant-info.components";
export const MapCallout = ({ restaurant }) => (
<CompactRestaurantInfo 
  isMap restaurant={ restaurant }     
/>

);