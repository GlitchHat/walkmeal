import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Order from './order';
import Auction from './auction';
import Home from './home';
import handleLogout from './home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('./Group_32.png')} style={{ width: 284, height: 193 }} />
    <Text>Loading...</Text>
  </View>
);


const App = () => {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);

  const LogoImage = () => {
    return (
      <View style={{marginLeft: 20}}>
        <Image source={require('./assets/logo.png')} style={{height:21.37, width:82}}/>
      </View>
    );
  }

  useEffect(() => {
    // 가상의 로딩 시간을 설정하여 로딩 상태를 조작합니다.
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2초 후에 로딩 상태를 해제합니다.
  }, []);
  return (
    <Stack.Navigator>
      {isLoading ? (
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }} // 로딩 화면에서 네비게이션 바를 숨깁니다.
          />
        ) : (
          <>
            <Stack.Screen name="WalkMeal" component={BottomTabNavigator} 
              options={{
                headerLeft: () => <LogoImage/>,
                title:'',
                headerStyle: {backgroundColor: '#97c387'},
                headerRight: () => (
                  <View style={{marginRight: 20}}>
                    <Text onPress={handleLogout}>Log out</Text>
                  </View>
                )
              }}
            />
          </>
        )}
    </Stack.Navigator>
  )
}

function BottomTabNavigator() {
  return (
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

          return <Image source={iconSource} style={{ width: 30, height: 30 }} />;
        },
      })}
      tabBarOptions={{activeTintColor:'#97c387',inactiveTintColor:'black'}}
    >
      <Tab.Screen name="Order" component={Order} options={{headerShown: false}}/>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="Auction" component={Auction} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default App;