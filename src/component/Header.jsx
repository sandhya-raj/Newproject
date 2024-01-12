import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {blue} from '../../config';
import {useNavigation} from '@react-navigation/native';

const Header = ({onPress, title, customContainerStyle}) => {
  const navigation = useNavigation();
  const back = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={back}
        style={[styles.button, customContainerStyle]}>
        <Image
          source={require('../../assets/Image/backicon.png')}
          style={styles.imgae}
        />
      </TouchableOpacity>
      <Text style={styles.butuntext}>{title}</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    borderRadius: 15,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 20,
  },
  butuntext: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
    marginLeft: 90,
  },
  imgae: {
    height: 20,
    width: 20,
  },
});
