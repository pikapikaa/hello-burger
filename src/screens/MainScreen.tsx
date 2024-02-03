import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Place from '../../assets/svg/Place';
import Route from '../../assets/svg/Route';
import Housing from '../../assets/svg/Housing';

interface MainScreenProps {}

const {width, height} = Dimensions.get('window');
const MainScreen = (props: MainScreenProps) => {
  const data = [
    {
      id: 1,
      url: 'https://sun9-32.userapi.com/impf/c836223/v836223221/10cfd/m7J2OjwVhHA.jpg?size=637x603&quality=96&sign=f066a783bbaa0ba0429c80c06b39c0f8&c_uniq_tag=5FYskGgSs-qGCBMIu5n4WTe13N7D8Gnw69aQRqJLvFo&type=album',
    },
    {
      id: 2,
      url: 'https://baikalgo.ru/wp-content/uploads/2021/03/barguzinskij-dacan.jpg',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.url}}
          style={{width: 265, height: 265, opacity: 0.8}}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
          }}>
          <Text style={{color: 'white', fontWeight: '700', marginBottom: 15}}>
            Баргузинский дацан
          </Text>
          <View style={{gap: 5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'white'}}>Маршрутов</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'white'}}>Гид</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'white'}}>Жилья</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/mainImage.png')}
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

        <View style={{marginTop: 16 + 55, marginHorizontal: 16, gap: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: '600', color: '#3D4252'}}>
              Популярные места
            </Text>
            <Text style={{color: '#2F80ED'}}>Смотреть еще</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
          />
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
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
});
