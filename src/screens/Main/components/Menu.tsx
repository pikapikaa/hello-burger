import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

interface MenuProps {
  data: any[];
}

const Menu = ({data}: MenuProps) => {
  return (
    <View style={styles.menuContainer}>
      {data.map(item => (
        <View key={item.id} style={styles.menuItemContainer}>
          <MaterialCommunityIcons name={item.icon} size={33} color="#3D4252" />
          <Text style={styles.menuTitle}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {},
  menuContainer: {
    backgroundColor: 'white',
    elevation: 0.3,
    position: 'absolute',
    top: -55,
    width: width - 32,
    height: 110,
    paddingTop: 22,
    paddingBottom: 24,
    alignSelf: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13,
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#3D425214',
  },
  menuTitle: {
    fontSize: 11,
    fontFamily: 'SF-Pro-Display-Bold',
    color: '#3D4252',
    textTransform: 'uppercase',
  },
  separatorContainer: {width: 10},
});
