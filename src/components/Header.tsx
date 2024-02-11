import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, ViewStyle, TouchableOpacity} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedProps,
  interpolateColor,
  useAnimatedStyle,
  createAnimatedPropAdapter,
  processColor,
} from 'react-native-reanimated';

import {colors, stylesConst} from '../../constants';
import BackIcon from '../../assets/svg/BackIcon';

interface HeaderProps {
  style?: ViewStyle;
  title: string;
  translateY?: SharedValue<number>;
}

const Header = ({title, style, translateY}: HeaderProps) => {
  const navigation = useNavigation();

  const rStyle = useAnimatedStyle(() => {
    if (!translateY) {
      return {};
    }

    const color = interpolateColor(
      translateY.value,
      [0, 100],
      ['transparent', colors.TEXT_TITLE],
    );
    return {
      color,
    };
  });

  const rContainerStyle = useAnimatedStyle(() => {
    if (!translateY) {
      return {};
    }

    const backgroundColor = interpolateColor(
      translateY.value,
      [0, 100],
      ['transparent', colors.WHITE],
    );

    return {
      backgroundColor,
      elevation: translateY.value >= 100 ? 10 : 0,
    };
  });

  const animatedProps = useAnimatedProps(
    () => {
      if (!translateY) {
        return {fill: ''};
      }

      const fill = interpolateColor(
        translateY.value,
        [0, 100],
        [colors.WHITE, colors.TEXT_TITLE],
      );

      return {
        fill,
      };
    },
    [],
    createAnimatedPropAdapter(
      props => {
        if (Object.keys(props).includes('fill')) {
          props.fill = {type: 0, payload: processColor(props.fill)};
        }
      },
      ['fill', 'stroke'],
    ),
  );

  return (
    <Animated.View style={[styles.container, style, rContainerStyle]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon animatedProps={animatedProps} />
      </TouchableOpacity>
      <Animated.Text style={[stylesConst.text_16m, rStyle]}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 16,
    width: '100%',
  },
});
