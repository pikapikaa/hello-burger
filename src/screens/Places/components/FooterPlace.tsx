import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {stylesConst} from '../../../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

// interface FooterPlaceProps {}

const FooterPlace = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={stylesConst.text_20m}>От 6400 ₽</Text>
        <Text style={stylesConst.text_14r}>за человека</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Ionicons name="calendar-outline" color="white" size={20} />
        <Text style={styles.date}>Показать даты</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterPlace;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#0075FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  date: {...stylesConst.text_14m, color: 'white'},
});
