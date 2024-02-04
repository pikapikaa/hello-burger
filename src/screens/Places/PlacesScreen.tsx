import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface PlacesScreenProps {}

const PlacesScreen = (props: PlacesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Места</Text>
    </View>
  );
};

export default PlacesScreen;

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
