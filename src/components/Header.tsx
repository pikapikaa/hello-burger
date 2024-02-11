import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, stylesConst} from '../../constants';

interface HeaderProps {
  style?: ViewStyle;
  title: string;
}

const Header = ({title, style}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="arrow-back" color="black" size={20} />
      </TouchableOpacity>
      <Text style={stylesConst.text_16m}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 16,
    backgroundColor: colors.WHITE,
    width: '100%',
    elevation: 10,
  },
});
