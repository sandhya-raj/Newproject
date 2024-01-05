import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import Custombutton from '../component/Custombuton';
import { blue } from '../../config';

const OTPScreen = ({navigation}) => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = code => {
    setOTP(code);
  };
  const verifyOTP = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to email
      </Text>
      <Text style={styles.example}>sar@gmail.com</Text>
      <OTPTextInput
        containerStyle={{width: '60%', height: 100, marginTop: 20}}
        inputCount={4}
        tintColor={'grey'}
        offTintColor={'lightgrey'}
        handleTextChange={handleOTPChange}
        defaultValue={otp}
        textInputStyle={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: 'lightgrey',
        }}
      />
      <Custombutton text={'Verify'} onPress={verifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: '500',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: 'grey',
    marginHorizontal: 17,
    textAlign: 'center',
  },
  example: {
    color: blue,
    fontWeight: '600',
  },
});

export default OTPScreen;
