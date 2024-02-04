import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import Place from '../../../assets/svg/Place';
import Route from '../../../assets/svg/Route';
import Housing from '../../../assets/svg/Housing';
import {images} from '../../../dummy';
import Attraction from './components/Attraction';

const {width, height} = Dimensions.get('window');
const MainScreen = () => {
  const renderItem = ({item}: {item: any}) => {
    return <Attraction data={item} />;
  };

  const separator = () => <View style={styles.separatorContainer} />;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/mainImage.png')}
        style={{width, height: height * 0.38}}
      />
      <View>
        <View style={styles.menuContainer}>
          <View
            style={[
              styles.menuItemContainer,
              {borderRightWidth: 1, borderRightColor: '#3D425214'},
            ]}>
            <Place />
            <Text style={styles.menuTitle}>МЕСТА</Text>
          </View>
          <View
            style={[
              styles.menuItemContainer,
              {borderRightWidth: 1, borderRightColor: '#3D425214'},
            ]}>
            <Route />
            <Text style={styles.menuTitle}>МАРШРУТЫ</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Housing />
            <Text style={styles.menuTitle}>ЖИЛЬЕ</Text>
          </View>
        </View>

        <View style={{marginTop: 16 + 55, gap: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingStart: 20,
              paddingEnd: 10,
            }}>
            <Text
              style={{
                fontFamily: 'SF-Pro-Display-Semibold',
                color: '#3D4252',
                fontSize: 14,
              }}>
              Популярные места
            </Text>
            <Text
              style={{
                color: '#2F80ED',
                fontSize: 12,
                fontFamily: 'SF-Pro-Display-Regular',
              }}>
              Смотреть еще
            </Text>
          </View>

          <FlashList
            estimatedItemSize={265}
            data={images}
            renderItem={renderItem}
            horizontal
            ItemSeparatorComponent={separator}
          />
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
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
  },
  menuTitle: {
    fontSize: 11,
    fontFamily: 'SF-Pro-Display-Bold',
    color: '#3D4252',
  },
  separatorContainer: {width: 10},
});
