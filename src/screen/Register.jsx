import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ScrollView,
} from 'react-native';
// Change the import statement
import CustomCheckbox from '../component/Customcheckbox';
import {blue} from '../../config';
import Custombutton from '../component/Custombuton';

function Register({navigation}) {
  console.log(navigation, 'naviga');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const signup = () => {
    navigation.navigate('OtpScreen');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Fill your information below or register with your social account
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
        </View>

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

        <View style={styles.checkboxContainer}>
          <CustomCheckbox />
          <Text style={styles.agree}>Agree with </Text>
          <TouchableOpacity style={styles.termsview}>
            <Text style={styles.terms}>Terms and conditions</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity style={styles.btn} onPress={()=>signup()}>
        <Text style={styles.btntext}>Sign up</Text>
      </TouchableOpacity> */}
        <Custombutton text={'Sign Up'} onPress={signup} />
      </View>
    </ScrollView>
  );
}

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 100,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 30,
    color: 'grey',
    marginHorizontal: 17,
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
  btn: {
    backgroundColor: blue,
    padding: 15,
    borderRadius: 15,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  show: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight: 5,
  },
});
