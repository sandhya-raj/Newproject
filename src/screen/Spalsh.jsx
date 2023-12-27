import React, {useEffect} from 'react';
import {StyleSheet, Text, Image, View, SafeAreaView} from 'react-native';
import {RNSScreenStackHeaderConfig} from 'react-native-screens';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 8000);
  });

  return (
    <View style={styles.linearGradient}>
      <Image source={require('../../assets/Image/splashIcon.png')} />
      <Text style={styles.Heading}>Car Parking App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007DFC',
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
