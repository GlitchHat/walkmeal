import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import API from './viewstoreAPI';

const Buy = (props) => {
    const [initdata, setInitData] = useState([]);

    useEffect(() => {
      fetchInitialData();
    }, []);
  
    const fetchInitialData = async () => {
      try {
        const response = await API.get(`/view_store/${props.id}`);
        setInitData(response.data);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    return (
        <View>
            <Text>{initdata.title}</Text>
        </View>
    )
}

export default Buy;