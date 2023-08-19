import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import Datalist from './datalist';
import { styles } from './ordercss';

const Auction = () => {

  const initdata = [
    {
      id: "1",
      name: "치킨",
      sale_price: 10,
      org_price: 20000,
      coin: 0
    },
    {
      id: "2",
      name: "햄버거",
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
      alert('경매 금액을 성공적으로 입력하였습니다!');
    } else {
      alert('현재 경매 금액보다 높게 작성해주세요');
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
          <Text style={styles.name}>{item.name} 경매 시작!</Text>
          <Text>현재 {item.sale_price}원 - 현재 나의 배팅가</Text>
          <TextInput
            placeholder='금액을 입력하세요'
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