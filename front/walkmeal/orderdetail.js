import React from 'react';
import { View, Text } from 'react-native';

const OrderDetails = ({ route }) => {
  const { itemName } = route.params;

  return (
    <View>
      <Text>선택한 메뉴: {itemName}</Text>
      {/* 추가적인 페이지 내용을 구현할 수 있음 */}
    </View>
  );
}

export default OrderDetails;
