import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, stylesConst} from '../../../../constants';

interface TabPlaceProps {
  text: string;
}

const TabPlace = ({text}: TabPlaceProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TabPlace;

const styles = StyleSheet.create({
  container: {},
  text: {
    ...stylesConst.text_16r,
    color: colors.TEXT_TITLE,
    textAlign: 'justify',
    lineHeight: 23,
  },
});
