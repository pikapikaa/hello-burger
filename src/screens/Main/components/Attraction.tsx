import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const SIZE_IMAGE = 265;

interface AttractionProps {
  data: any;
}

const Attraction = ({data}: AttractionProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: data.url}} style={styles.image} resizeMode="cover" />
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
        }}>
        <Text style={{color: 'white', fontWeight: '700', marginBottom: 15}}>
          {data.title}
        </Text>
        <View style={{gap: 5}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'white'}}>Маршрутов</Text>
            <Text style={{color: 'white'}}>{data.route}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white'}}>Гид</Text>
            <Text style={{color: 'white'}}>{data.guide}</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white'}}>Жилья</Text>
            <Text style={{color: 'white'}}>{data.housing}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Attraction;

const styles = StyleSheet.create({
  container: {},
  imageContainer: {borderRadius: 10},
  image: {width: SIZE_IMAGE, height: SIZE_IMAGE, borderRadius: 4},
});
