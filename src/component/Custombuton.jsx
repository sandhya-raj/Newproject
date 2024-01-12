import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {blue} from '../../config';

const Custombutton = ({onPress, text, customContainerStyle}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, customContainerStyle]}>
        <Text style={styles.butuntext}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Custombutton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: blue,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  butuntext: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
