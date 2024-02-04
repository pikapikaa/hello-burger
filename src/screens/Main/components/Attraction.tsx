import React from 'react';
import {Text, View, StyleSheet, Image, ViewStyle} from 'react-native';

const SIZE_IMAGE = 265;

interface AttractionProps {
  data: any;
  style?: ViewStyle;
}

const Attraction = ({data, style}: AttractionProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={{uri: data.url}} style={styles.image} resizeMode="cover" />
      <View style={styles.noteContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.text}>Маршрутов</Text>
            <View style={styles.dottedView} />
            <Text style={styles.text}>{data.routes}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Гид</Text>
            <View style={styles.dottedView} />
            <Text style={styles.text}>{data.guide}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Жилья</Text>
            <View style={styles.dottedView} />
            <Text style={styles.text}>{data.housing}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Attraction;

const styles = StyleSheet.create({
  container: {borderRadius: 10},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noteContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  info: {gap: 5},
  title: {
    color: 'white',
    fontFamily: 'SF-Pro-Display-Bold',
    marginBottom: 15,
  },
  dottedView: {
    flex: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    borderBottomColor: 'white',
    marginHorizontal: 15,
  },
  image: {width: SIZE_IMAGE, height: SIZE_IMAGE, borderRadius: 4},
  text: {color: 'white', fontFamily: 'SF-Pro-Display-Regular', fontSize: 12},
});
