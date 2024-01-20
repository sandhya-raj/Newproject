import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {blue} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../utils/scale';

const Header = ({title, customContainerStyle, source, onPress}) => {
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
          style={styles.image}
        />
      </TouchableOpacity>

      <Text style={[styles.butuntext, !source && styles.centerText]}>
        {title}
      </Text>

      {source && (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button1, customContainerStyle]}>
          <Image source={source} style={styles.image} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: 7,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E4E2',
    borderRadius: 50,
    marginTop: 10,
    marginHorizontal: scale(10),
    alignItems: 'center',
  },
  button1: {
    padding: 7,
    justifyContent: 'flex-end',
    marginTop: 10,
    marginHorizontal: scale(10),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E4E2',
    borderRadius: 50,
  },
  butuntext: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
  centerText: {
    flex: 1,
    marginRight: scale(75),
    marginTop: scale(5),
  },
  image: {
    height: 20,
    width: 20,
  },
});
