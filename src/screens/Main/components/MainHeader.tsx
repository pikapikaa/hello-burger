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
import {DrawerActions, useNavigation} from '@react-navigation/native';

interface MainHeaderProps {
  style: ViewStyle;
}

const MainHeader = ({style}: MainHeaderProps) => {
  const navigation = useNavigation();

  const onDrawerPressHandler = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onDrawerPressHandler}>
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
