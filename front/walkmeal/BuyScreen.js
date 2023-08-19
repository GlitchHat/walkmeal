import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 283,
    height: 182,
  },
  font: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 30,
  }
});

const BuyScreen = (props) => {
    const route = useRoute();
    const itemId = route.params?.itemId;
    const navigation = useNavigation();

    const com = () => {
        alert("Transaction has been completed. \n*** Earned 10 points ***")
        navigation.navigate('Order');
    }

    return (
        <View style={styles.container}>
            <Image source={require('./assets/Group_63.png')} style={styles.image} />
        <Text style={styles.font}>The remaining distance is 13km..</Text>
        <Text> </Text>
        <Text> </Text>
        <Button title='Transaction completed' onPress={com} style={styles.button}/>
        </View>
    );
    };

export default BuyScreen;
