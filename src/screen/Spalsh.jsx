import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {RNSScreenStackHeaderConfig} from 'react-native-screens';
import {blue} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Landing');
    }, 8000);
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={blue} barStyle="light-content" />
      <Image source={require('../../assets/Image/splashIcon.png')} />
      <Text style={styles.Heading}>Car Parking App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blue,
  },
  image: {
    height: 240,
    width: 240,
    marginBottom: 80,
  },
  Heading: {
    color: '#f6f6f6',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
});
