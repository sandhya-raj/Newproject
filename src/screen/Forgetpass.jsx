import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from 'react-native';
import {blue} from '../../config';
import Custombutton from '../component/Custombuton';
import Header from '../component/Header';
function Forgetpass({navigation}) {
  console.log(navigation, 'naviga');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [Passwordconfirm, setPasswordconfirm] = useState('');
  const signup = () => {
    navigation.navigate('OtpScreen');
  };

  return (
    <View style={styles.containerView}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>New Password</Text>
        <Text style={styles.subtitle}>
          Your new password must be different from previously used password
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Password:</Text>
          <View style={styles.passwordInput}>
            <TextInput
              style={{flex: 1}}
              placeholder="Enter your password"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setHidePassword(!hidePassword)}>
              {!hidePassword && (
                <Image
                  source={require('../../assets/Image/eye.png')}
                  style={styles.show}
                />
              )}
              {hidePassword && (
                <Image
                  source={require('../../assets/Image/hideeye.png')}
                  style={styles.show}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Confirm Password:</Text>
          <View style={styles.passwordInput}>
            <TextInput
              style={{flex: 1}}
              placeholder="Enter your password"
              onChangeText={text => setPasswordconfirm(text)}
              value={Passwordconfirm}
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setHidePassword(!hidePassword)}>
              {!hidePassword && (
                <Image
                  source={require('../../assets/Image/eye.png')}
                  style={styles.show}
                />
              )}
              {hidePassword && (
                <Image
                  source={require('../../assets/Image/hideeye.png')}
                  style={styles.show}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Custombutton
          text={'Create  new password'}
          onPress={signup}
          customContainerStyle={styles.btn}
        />
      </View>
    </View>
  );
}

export default Forgetpass;
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: '600',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 40,
    color: 'grey',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 13,
    borderRadius: 8,
    width: 300,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 50,
  },
  lable: {
    fontSize: 17,
    marginBottom: 5,
  },

  btntext: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  agree: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  terms: {
    color: blue,
    fontSize: 15,
    fontWeight: '500',
  },
  termsview: {
    borderBottomColor: blue,
    borderBottomWidth: 1,
  },
  passwordInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 300,
    padding: 13,
    justifyContent: 'space-between',
    height: 45,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
  },
  show: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  forgetview: {
    borderBottomColor: blue,
    borderBottomWidth: 1,
    marginBottom: 15,
    alignSelf: 'flex-end',
    marginEnd: 25,
  },
  forget: {
    color: blue,
  },

  btn: {
    marginTop: 30,
    alignItems: 'center',
  },
});
