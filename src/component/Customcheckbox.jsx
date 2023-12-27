import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
      <View
        style={[
          styles.checkbox,
          isChecked ? styles.checked : styles.unchecked,
        ]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'transparent', // Change this to your desired checked color
    borderColor: 'blue', // Change this to your desired checked border color
  },
  unchecked: {
    backgroundColor: 'transparent',
    borderColor: 'black', // Change this to your desired unchecked border color
  },
  checkmark: {
    color: 'blue', // Change this to your desired checkmark color
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckbox;
