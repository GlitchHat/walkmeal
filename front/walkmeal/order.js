import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ordercss';

const Order = () => {
  const navigation = useNavigation();

  const [initdata, setInitData] = useState([
    {
      "id": 1, 
      "title": "Daejeon Octopus Restaurant",
      "subtitle": "Signature Roasting, the Ultimate Restaurant for Light Meals",
      "time": "10:49 PM - 10:49 PM", 
      "distance": 2,
      "price": 7500,
      "detail": false
    },
    {
      "id": 2, 
      "title": "Baskin Robbins", 
      "subtitle": "Magical Ice Cream", 
      "time": "10:49 PM - 10:49 PM", 
      "distance": 4,
      "price": 12600,
      "detail": false
    },
    {
      "id": 3, 
      "title": "Rolling Pasta", 
      "subtitle": "A Bite of Carbonara Pasta", 
      "time": "10:49 PM - 10:49 PM", 
      "distance": 1.2,
      "price": 17500,
      "detail": false
    }
  ]);

  const showDetail = (itemId) => {
    const updatedData = initdata.map(item => {
      if (item.id === itemId) {
        return { ...item, detail: !item.detail };
      }
      return item;
    });
    setInitData(updatedData);
  }

  const navigateToBuyScreen = (itemId) => {
    navigation.navigate('BuyScreen');
  };

  return (
    <View style={styles.container}>
      {initdata.map(item => (
        <TouchableOpacity key={item.id} style={styles.box}>
          {item.detail === false ? (
            <>
              <Text style={styles.name}>{item.title}</Text>
              <Text>{item.subtitle}</Text>
              <Text>{item.time}</Text>
              <Text>{item.distance}km</Text>
              <Button title='Buy' color="#97c387" onPress={() => showDetail(item.id)} />
            </>
          ) : (
            <>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={{fontWeight: 'bold'}}>Price : {item.price}Won</Text>
              <Text> </Text>
              <Button title='Buy' color="#97c387" onPress={navigateToBuyScreen} />
              <Text> </Text>
              <Button title='back' color="#97c387" onPress={() => showDetail(item.id)} />
            </>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Order;
