import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {blue} from '../../config';
import {scale, verticalScale} from '../utils/scale';

const CardHori = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/Image/homepageimage.jpeg')}
            style={styles.image}
          />
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/Image/eye.png')}
              style={styles.icon}
            />
            <Image
              source={require('../../assets/Image/eye.png')}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.carPView}>
            <Text style={styles.carP}>car Parking</Text>
          </View>
          <Text style={styles.title}>ParkEase Pro</Text>
          <View style={styles.locationnameview}>
            <Image
              source={require('../../assets/Image/location.png')}
              style={styles.locationicon}
            />
            <Text style={styles.subtext}>New York , USA</Text>
          </View>
          <View style={styles.parkingpaytime}>
            <Text style={styles.pay}>$8.00</Text>
            <Text style={styles.time}>/hr</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    width: '100%',
  },
  cardContent: {
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    resizeMode: 'cover',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
    height: 15,
    width: 14,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  carPView: {
    backgroundColor: '#f6f6f6',
    padding: 3,
    alignItems: 'center',
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    marginBottom: 10,
    width: scale(80),
  },
  carP: {
    color: blue,
    fontWeight: '400',
    fontSize: 15,
  },
  title: {
    fontWeight: '600',
    fontSize: 17,
    color: '#242424',
  },
  parkingpaytime: {
    flexDirection: 'row',
  },
  pay: {
    color: blue,
    fontSize: 18,
    fontWeight: '600',
  },
  time: {fontSize: 18, fontWeight: '500', color: '#242424'},
  horizontalLine: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
  timericon: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    margin: 1,
  },
  bottomview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  timerview: {
    flexDirection: 'row',
    padding: 5,
  },
  text1: {
    margin: 1,
    fontWeight: '600',
    fontSize: 18,
    color: '#242424',
  },
  text2: {
    color: '#797979',
    margin: 1,
    fontWeight: '600',
    fontSize: 18,
  },
  locationnameview: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
  },
  locationicon: {
    height: 15,
    width: 15,
    alignSelf: 'center',
  },
  subtext: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
});

export default CardHori;
