import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ProfileScreenProps {}

const ProfileScreen = (props: ProfileScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Профиль</Text>
    </View>
  );
};

export default ProfileScreen;

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
