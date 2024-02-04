import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PlaceScreen = () => {
  const route = useRoute();
  const data = route.params?.data;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.title}</Text>
    </View>
  );
};

export default PlaceScreen;

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
