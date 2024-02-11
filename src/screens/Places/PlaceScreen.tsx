import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import ImagePlace from './components/ImagePlace';
import PlaceView from './components/PlaceView';
import FooterPlace from './components/FooterPlace';
import Header from '../../components/Header';

const PlaceScreen = () => {
  const route = useRoute();
  const data = route.params?.data;

  const translateY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
  });

  return (
    <View style={styles.container}>
      <Header
        title={data.title}
        style={styles.headerContainer}
        translateY={translateY}
      />
      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <ImagePlace url={data.url} />
        <PlaceView title={data.title} text={data.text} />
      </Animated.ScrollView>
      <FooterPlace />
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {position: 'absolute', zIndex: 1},
});
