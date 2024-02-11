import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, stylesConst} from '../../constants';

interface RatingProps {
  value: number;
  reviews: number;
}

const Rating = ({value, reviews}: RatingProps) => {
  return (
    <View style={[styles.row, {gap: 7}]}>
      <Ionicons name="star" size={14} color={colors.BLUE} />
      <View style={[styles.row, {gap: 3}]}>
        <Text style={stylesConst.text_12r}>{value}</Text>
        <Text style={[stylesConst.text_12r, {color: colors.INACTIVE_TEXT}]}>
          ({reviews})
        </Text>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
});
