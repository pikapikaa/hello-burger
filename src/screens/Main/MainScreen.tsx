import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import {images} from '../../../dummy';
import Attraction from './components/Attraction';
import Menu from './components/Menu';

const {width, height} = Dimensions.get('window');
const menuItems = [
  {id: '1', name: 'Места', icon: 'map-search-outline'},
  {id: '2', name: 'Маршруты', icon: 'map-marker-distance'},
  {id: '3', name: 'Жилье', icon: 'bed-king-outline'},
];

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
        <Menu data={menuItems} />

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
  separatorContainer: {width: 10},
});
