import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import Datalist from './datalist';
import { styles } from './ordercss';

const Auction = () => {

    
 const initdata = [{
    id:"1",
    name:"치킨",
    sale_price:10,
    org_price:20000
  },{
    id:"2",
    name:"햄버거",
    sale_price:10,
    org_price:7500
  }];
  
  const [data, setData] = useState(initdata);

  const [coin, setCoin] = useState(0);

  const valuecheck = (itemID) => {
    const item = data.find(item => item.id === itemID);

    if(coin > item.sale_price) {
        setData(prevdata => ({...prevdata, sale_price: coin}));
        alert('배팅하였습니다.');
  } else {
    alert('경매 가격보다 낮게 적을 수 없어요');
    setCoin(0);
  }

  return (
    <View style={styles.container}>
        {data.map(item => (
            <View style={styles.box}>
                <Text key={item.id} style={styles.name}>{item.name} 경매 시작!</Text>
                <Text>{item.sale_price}/start - 현재 나의 배팅가</Text>
                <TextInput 
                    placeholder='금액을 입력하세요'
                    value={coin}
                    onChangeText={text => setCoin(text)}
                />
                {/* <Button title="Buy" onPress={valuecheck}/> */}
            </View>
        ))}
    </View>
  );
}
}
export default Auction;