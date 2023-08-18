import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: 300,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // 텍스트 가운데 정렬
  },
});
