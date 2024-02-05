import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors, height, stylesConst, width} from '../../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PlaceScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const data = route.params?.data;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: data.url}}
        style={styles.imageContainer}
        resizeMode="cover">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="arrow-back" color="white" size={20} />
        </TouchableOpacity>

        <View style={styles.row}>
          <Ionicons name="image-outline" color="white" size={20} />
          <Text style={styles.label}>13 фото</Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="heart-outline" size={25} color="#3D4252" />
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="share-social-outline" size={25} color="#3D4252" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    width,
    height: height / 3,
    justifyContent: 'space-between',
    paddingLeft: 22,
    paddingVertical: 17,
  },
  actionContainer: {
    position: 'absolute',
    bottom: -24,
    right: 16,
    flexDirection: 'row',
    gap: 10,
  },
  iconContainer: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    backgroundColor: colors.WHITE,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: 'black',
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 14,
  },
  label: {
    ...stylesConst.text_14r,
    color: colors.WHITE,
  },
});
