import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {blue} from '../../config';

const data = [
  {label: 'Male', value: '2'},
  {label: 'Female', value: '3'},
  {label: 'Others', value: '4'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      iconColor={blue}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select' : '...'}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 13,
    borderRadius: 8,
    width: '100%',
    height: 45,
    paddingHorizontal: 8,
    backgroundColor: '#f6f6f6',
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 40,
    height: 30,
  },
});
