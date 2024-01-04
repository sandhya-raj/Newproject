import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Home({navigation}) {

  // console.log(navigation, 'naviga');

  const started = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('../../assets/Image/homepageimage.jpeg')}
      resizeMode="stretch"
      style={styles.backgroundimagestyle}>
      <Text style={styles.title}>Find The Best Car Parking Spot</Text>
      <Text style={styles.subtitle}>
        Find the best parking spot ,every time , without hassls
      </Text>
      <TouchableOpacity style={styles.buttun} onPress={started}>
        <Text style={styles.buttuntxt}>Let's Get Started</Text>
      </TouchableOpacity>
      <View style={styles.account}>
        <Text style={styles.bottontext}> Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.bottontext2}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Home;
const styles = StyleSheet.create({
  backgroundimagestyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#f6f6f6',
    fontWeight: '700',
    marginHorizontal: 27,
    width: 300,
  },
  subtitle: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'lightgrey',
    fontWeight: '500',
    marginHorizontal: 37,
    marginTop: 20,
    width: 250,
  },
  buttun: {
    backgroundColor: '#007DFC',
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    width: 320,
  },
  buttuntxt: {
    color: '#f6f6f6',
    fontSize: 20,
    fontWeight: '600',
  },
  account: {
    marginHorizontal: 37,
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  bottontext: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  bottontext2: {
    fontSize: 15,
    textAlign: 'center',
    color: '#007DFC',
    fontWeight: '300',
    marginLeft: 5,
    borderBottomColor: '#007DFC',
    borderBottomWidth: 1,
  },
});
