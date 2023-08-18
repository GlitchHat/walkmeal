import React from "react";
import {Text, View, Image} from "react-native";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Auction from "./screens/Auction";
import Order from "./screens/Order";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            if (route.name === "Order") {
              iconSource = focused
                ? require("./assets/order-active.png") // Active 상태 이미지
                : require("./assets/order-inactive.png"); // Inactive 상태 이미지
            } else if (route.name === "Home") {
              iconSource = focused
                ? require("./assets/home-active.png")
                : require("./assets/home-inactive.png");
            } else if (route.name === "Auction") {
              iconSource = focused
                ? require("./assets/auction-active.png")
                : require("./assets/auction-inactive.png");
            }

            return <Image source={iconSource} style={{ width: 20, height: 20 }} />;
          },
        })}
      >
        <Tab.Screen name="Order" component={Order}/>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Auction" component={Auction}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;