import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailsScreen, HomeScreen } from "../screens"

const { Navigator, Screen } = createStackNavigator();

export const RootNav=()=>(
   <NavigationContainer>
      <Navigator>
      <Screen name = "Home" component ={HomeScreen}/>
      <Screen name="Details" component={DetailsScreen}  options={{ title: 'Paymant Details' }}/>
      </Navigator>
   </NavigationContainer>
   

)