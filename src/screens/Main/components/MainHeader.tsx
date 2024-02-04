import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface MainHeaderProps {
  style: ViewStyle;
}

const MainHeader = ({style}: MainHeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="menu" color="white" size={20} />
      </TouchableOpacity>

      <Text style={styles.title}>Hello, Buryatia</Text>
      <TouchableOpacity>
        <Ionicons name="search" color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    color: 'white',
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
