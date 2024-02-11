import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, stylesConst} from '../../constants';

interface ChipProps {
  children?: JSX.Element;
  title?: string;
}

const Chip = ({children, title}: ChipProps) => {
  return (
    <View style={styles.container}>
      {title ? <Text style={styles.title}>{title}</Text> : children ?? null}
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderColor: colors.BORDER_GRAY,
    alignSelf: 'flex-start',
  },
  title: {
    ...stylesConst.text_14r,
    color: colors.TEXT_TITLE,
  },
});
