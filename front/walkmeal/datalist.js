import {View,Text} from 'react-native';

const Datalist = ({id, food}) => {
    return (
        <Text key={id}>{food}</Text>
    );
}