import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface HousingScreenProps {}

const HousingScreen = (props: HousingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HousingScreen</Text>
    </View>
  );
};

export default HousingScreen;

const styles = StyleSheet.create({
  container: {},
});
