import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {blue,grey} from '../../config';
import {scale, verticalScale} from '../utils/scale';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const CardHori = ({
  source,
  source1,
  source2,
  text,
  text1,
  location,
  locationicon,
  pay,
  hours,
  time,
  min,
  icon1,
  icon2,
  number,
  spots,
  star,
  rating,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.starview}>
        <Image
          source={require('../../assets/Image/star.png')}
          style={styles.staricon}
        />
        <Text style={{textAlign: 'center', fontSize: 13, marginLeft: 2}}>
          {rating}
        </Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Image source={source} style={styles.image} />
          <View style={styles.iconContainer}>
            <Image source={source1} style={styles.icon} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.carPView}>
            <Text style={styles.carP}>{text}</Text>
          </View>
          <Text style={styles.title}>{text1}</Text>
          <View style={styles.locationnameview}>
            <Image
              source={require('../../assets/Image/location1.png')}
              style={styles.locationicon}
            />
            <Text style={styles.subtext}>{location}</Text>
          </View>
          <View style={styles.parkingpaytime}>
            <Text style={styles.pay}>{pay}</Text>
            <Text style={styles.time}>{hours}</Text>
          </View>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.bottomview}>
        <View style={styles.timerview}>
          <Image source={icon1} style={styles.timericon} />
          <Text style={styles.text1}>{time}</Text>
          <Text style={styles.text2}>{min}</Text>
        </View>
        <View style={styles.timerview}>
          <Image source={icon2} style={styles.timericon} />
          <Text style={styles.text1}>{number}</Text>
          <Text style={styles.text2}>{spots}</Text>
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
    marginVertical: scale(5),
    padding: scale(7),
    marginHorizontal: scale(10),
    alignSelf: 'center',
    width: scale(335),
    position: 'relative',
  },
  cardContent: {
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 150, // Adjust the width as needed
    height: 130, // Adjust the height as needed
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    resizeMode: 'cover',
    margin: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    height: 25,
    width: 25,
    padding: 10,
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    alignSelf: 'center',
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
    width: scale(95),
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
  time: {fontSize: 18, fontWeight: '500', color: grey},
  horizontalLine: {
    height: 1,
    width: scale(335),
    marginTop: 3,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
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
    color: grey,
  },
  starview: {
    position: 'absolute',
    right: 10,
    top: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
  },
  staricon: {
    height: 13,
    width: 13,
  },
});

export default CardHori;
