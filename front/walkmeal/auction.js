import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Datalist from './datalist';
import { styles } from './ordercss';

const Auction = () => {

    
 const initdata = [{
    id:"1",
    name:"치킨"
  },{
    id:"2",
    name:"햄버거"
  }];
  
  const [data, setData] = useState(initdata);

  return (
    <View style={styles.container}>
        {data.map(item => (
            <View style={styles.box}>
                <Text key={item.id} style={styles.name}>{item.name} soldout</Text>
            </View>
        ))}
    </View>
  );
}

export default Auction;