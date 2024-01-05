import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {blue} from '../../config';
import Custombutton from '../component/Custombuton';

function SignIn({navigation}) {
  console.log(navigation, 'naviga');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const signin = () => {
    navigation.navigate('Forgetpass');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi Welcome back You've been missed</Text>
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

      <View style={styles.forgetview}>
        <TouchableOpacity>
          <Text style={styles.forget}>Forget Password</Text>
        </TouchableOpacity>
      </View>
      <Custombutton text={'Sign In'} onPress={signin} />
    </View>
  );
}

export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
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
    padding: 13,
    justifyContent: 'space-between',
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
});
