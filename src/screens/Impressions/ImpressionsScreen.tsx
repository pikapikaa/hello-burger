import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ImpressionsScreenProps {}

const ImpressionsScreen = (props: ImpressionsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ImpressionsScreen</Text>
    </View>
  );
};

export default ImpressionsScreen;

const styles = StyleSheet.create({
  container: {},
});
