import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import ImagePlace from './components/ImagePlace';
import PlaceView from './components/PlaceView';
import FooterPlace from './components/FooterPlace';
import Header from '../../components/Header';

const PlaceScreen = () => {
  const route = useRoute();

  const data = route.params?.data;

  return (
    <View style={styles.container}>
      <Header title="fdssdf" style={styles.headerContainer} />
      <ScrollView>
        <ImagePlace url={data.url} />
        <PlaceView title={data.title} text={data.text} />
      </ScrollView>
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
