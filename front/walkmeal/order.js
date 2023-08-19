import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OrderDetails from './orderdetail';
import { styles } from './ordercss';
import Buy from './buy';
import API from './viewstoreAPI';

const Order = () => {
  const navigation = useNavigation();

  const [initdata, setInitData] = useState([]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const response = await API.get(`/view_store`);
      setInitData(response.data);
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  };

  const submit = () => {
    
  }



  return (
    <View style={styles.container}>
      {initdata.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.box}
        >
          <Text style={styles.name}>{item.title}</Text>
          <Text>{item.subtitle}</Text>
          <Text>{item.time}</Text>
          <Text>{item.distance}km</Text>
          <Button title='Buy' onPress={<Buy id={item.id}/>}/>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Order;
