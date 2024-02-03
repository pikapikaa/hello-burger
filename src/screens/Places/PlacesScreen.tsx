import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface PlacesScreenProps {}

const PlacesScreen = (props: PlacesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>PlacesScreen</Text>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  container: {},
});
