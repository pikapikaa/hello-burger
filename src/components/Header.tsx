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
        <Ionicons name="arrow-back" color="white" size={20} />
      </TouchableOpacity>
      {/* <Text style={{color: 'red'}}>{title}</Text> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
