import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {blue} from '../../config';

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
      <View style={styles.container}>
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
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
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
    backgroundColor: blue,
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
    color: blue,
    fontWeight: '300',
    marginLeft: 5,
    borderBottomColor: blue,
    borderBottomWidth: 1,
  },
});
