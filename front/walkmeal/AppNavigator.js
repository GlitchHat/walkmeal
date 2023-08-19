import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Order from './order';
import BuyScreen from './BuyScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="BuyScreen" component={BuyScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
