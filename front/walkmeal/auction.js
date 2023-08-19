import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import Datalist from './datalist';
import { styles } from './ordercss';

const Auction = () => {

  const initdata = [
    {
      id: "1",
      name: "Chicken auction begins!",
      sale_price: 10,
      org_price: 20000,
      coin: 0
    },
    {
      id: "2",
      name: "Hamburger",
      sale_price: 10,
      org_price: 7500,
      coin: 0
    }
  ];

  const [data, setData] = useState(initdata);

  const valuecheck = (coin, price, itemId) => {
    if (coin > price) {
      const updatedData = data.map(item => {
        if (item.id === itemId) {
          return { ...item, sale_price: coin };
        }
        return item;
      });

      setData(updatedData);
      alert('Auction amount has been successfully entered!');
    } else {
      alert('Please enter an amount higher than the current auction price');
    }
  }

  const handleCoinChange = (itemId, coinValue) => {
    const updatedData = data.map(item => {
      if (item.id === itemId) {
        return { ...item, coin: coinValue };
      }
      return item;
    });

    setData(updatedData);
  };

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View style={styles.box} key={item.id}>
          <Text style={styles.name}>{item.name} auction begins!</Text>
          <Text>Currently {item.sale_price}won - Current bidding price from me</Text>
          <TextInput
            placeholder='Please enter the amount'
            value={item.coin.toString()}
            onChangeText={text => handleCoinChange(item.id, parseInt(text, 10))}
            keyboardType="numeric"
          />
          <Button title="Buy" color="#97c387" onPress={() => valuecheck(item.coin, item.sale_price, item.id)} />
        </View>
      ))}
    </View>
  );
}

export default Auction;