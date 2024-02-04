import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import {images} from '../../../dummy';
import Attraction from './components/Attraction';
import Menu from './components/Menu';
import {useNavigation} from '@react-navigation/native';
import MainHeader from './components/MainHeader';

const {width, height} = Dimensions.get('window');

const menuItems = [
  {id: '1', name: 'Места', icon: 'map-search-outline', screen: 'Places'},
  {
    id: '2',
    name: 'Маршруты',
    icon: 'map-marker-distance',
    screen: 'Impressions',
  },
  {id: '3', name: 'Жилье', icon: 'bed-king-outline', screen: 'Housing'},
];

const MainScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <Attraction
        data={item}
        style={{
          marginLeft: index === 0 ? 16 : 0,
          marginRight: index === images.length - 1 ? 16 : 0,
        }}
      />
    );
  };

  const separator = () => <View style={styles.separatorContainer} />;

  const onPopularNavigateHandle = () => {
    navigation.navigate('PopularPlacesScreen');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/mainImage.png')}
          style={{width, height: height * 0.38}}>
          <MainHeader style={{position: 'absolute'}} />
          <Text
            style={{
              position: 'absolute',
              color: 'white',
              left: 20,
              top: (height * 0.38) / 2,
              fontFamily: 'SF-Pro-Display-RegularItalic',
            }}>
            Организуй незабываемый {'\n'} отдых в Бурятии
          </Text>
        </ImageBackground>

        <View>
          <Menu data={menuItems} />

          <View style={styles.content}>
            <View style={styles.subtitleContainer}>
              <Text
                style={{
                  fontFamily: 'SF-Pro-Display-Semibold',
                  color: '#3D4252',
                  fontSize: 14,
                }}>
                Популярные места
              </Text>

              <TouchableOpacity onPress={onPopularNavigateHandle}>
                <Text
                  style={{
                    color: '#2F80ED',
                    fontSize: 12,
                    fontFamily: 'SF-Pro-Display-Regular',
                  }}>
                  Смотреть еще
                </Text>
              </TouchableOpacity>
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
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 20,
    paddingEnd: 10,
  },
  content: {marginTop: 16 + 55, gap: 10, paddingBottom: 16},
  separatorContainer: {width: 10},
});
