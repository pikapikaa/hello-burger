import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, stylesConst} from '../../../../constants';
import Chip from '../../../components/Chip';
import Rating from '../../../components/Rating';

interface TitlePlaceProps {
  title: string;
  text: string;
}

const TitlePlace = ({title, text}: TitlePlaceProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Chip title="Конный тур" />
        <Text style={styles.title}>{title}</Text>
        <Rating value={4.8} reviews={230} />
      </View>

      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default TitlePlace;

const styles = StyleSheet.create({
  container: {padding: 16},
  titleContainer: {},
  title: {...stylesConst.text_18b, color: colors.TEXT_TITLE},
  text: {
    ...stylesConst.text_16r,
    color: colors.TEXT_TITLE,
    textAlign: 'justify',
    lineHeight: 23,
  },
});
