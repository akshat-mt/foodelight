import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest , restaurantsTransform } from "./Restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants , setRestaurants] = useState([]);
  const [isloading , setIsLoading] = useState(false);
  const [error , setError] = useState(null);


  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest().then(restaurantsTransform).then((results) => {
        setRestaurants(results);
        setIsLoading(false);
      }).catch(err => {
        setError(err);
        setIsLoading(false);
      });
    },2000)
  }
  useEffect(() => {
    retrieveRestaurants();
  },[]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isloading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};