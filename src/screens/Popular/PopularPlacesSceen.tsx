import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface PopularPlacesProps {}

const PopularPlacesScreen = (props: PopularPlacesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Популярные места</Text>
    </View>
  );
};

export default PopularPlacesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 14,
  },
});
