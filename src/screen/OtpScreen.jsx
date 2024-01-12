import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import Custombutton from '../component/Custombuton';
import {blue} from '../../config';
import Header from '../component/Header';
import TabBar from '../component/Tabbar';
const OTPScreen = ({navigation}) => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = code => {
    setOTP(code);
  };
  const verifyOTP = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: 70,
        }}>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subtitle}>
          Please enter the code we just sent to email
        </Text>
        <Text style={styles.example}>example@gmail.com</Text>
        <OTPTextInput
          containerStyle={{
            width: '60%',
            height: 80,
            marginTop: 30,
          }}
          inputCount={4}
          tintColor={'#f6f6f6'}
          offTintColor={'#f6f6f6'}
          handleTextChange={handleOTPChange}
          defaultValue={otp}
          textInputStyle={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#f6f6f6',
            backgroundColor: '#f6f6f6',
          }}
        />
        <View style={{marginBottom: 30, alignItems: 'center'}}>
          <Text style={styles.didnt}>Didn't receive otp</Text>
          <TouchableOpacity>
            <Text style={styles.resend}>Resend otp</Text>
          </TouchableOpacity>
        </View>
        <Custombutton text={'Verify'} onPress={verifyOTP} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 1,
    fontWeight: '500',
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
  didnt: {
    fontSize: 15,
    textAlign: 'center',

    fontWeight: '500',
    marginLeft: 5,
  },
  resend: {
    fontSize: 15,
    textAlign: 'center',
    color: blue,
    fontWeight: '500',
    marginLeft: 5,
    borderBottomColor: blue,
    borderBottomWidth: 1,
  },
});

export default OTPScreen;
