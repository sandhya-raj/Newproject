import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
// Change the import statement
import CustomCheckbox from '../component/Customcheckbox';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleRegistration = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Checkbox checked:', isChecked);
  };

  return (
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
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CustomCheckbox />
        <Text> I agree to the terms and conditions</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: 20,
    color: 'grey',
    marginHorizontal: 17,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
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
    backgroundColor: '#007DFC',
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
});
