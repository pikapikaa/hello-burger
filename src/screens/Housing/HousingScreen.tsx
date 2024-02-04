import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface HousingScreenProps {}

const HousingScreen = (props: HousingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Жилье</Text>
    </View>
  );
};

export default HousingScreen;

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
