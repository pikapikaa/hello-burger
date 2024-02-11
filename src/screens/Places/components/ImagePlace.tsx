import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors, height, stylesConst, width} from '../../../../constants';

interface PlaceImageProps {
  url: string;
}

const ImagePlace = ({url}: PlaceImageProps) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={{uri: url}}
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
  );
};

export default ImagePlace;

const styles = StyleSheet.create({
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
  label: {
    ...stylesConst.text_14r,
    color: colors.WHITE,
  },
});
