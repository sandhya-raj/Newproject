/* eslint-disable no-undef */
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const CustomtextInput = ({}) => {
  return (
    <View style={styles.inputview}>
      <Text>{title} </Text>
      <TextInput
        style={style}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry
      />
    </View>
  );
};
export default CustomtextInput;
const styles = StyleSheet.create({
  inputview: {
    flex: 1,
  },
});
