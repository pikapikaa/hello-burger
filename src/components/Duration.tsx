import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, stylesConst} from '../../constants';

interface DurationProps {
  value1: number;
  value2: number;
}

const Duration = ({value1, value2}: DurationProps) => {
  return (
    <View style={[styles.row, {gap: 7}]}>
      <Ionicons name="time" color={colors.TEXT_TITLE} size={14} />
      <View style={[styles.row, {gap: 3}]}>
        <Text style={styles.text}>
          {value1} дня / {value2} ночи
        </Text>
      </View>
    </View>
  );
};

export default Duration;

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  text: {...stylesConst.text_12r},
});
