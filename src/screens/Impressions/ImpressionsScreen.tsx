import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ImpressionsScreenProps {}

const ImpressionsScreen = (props: ImpressionsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Впечатления</Text>
    </View>
  );
};

export default ImpressionsScreen;

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
