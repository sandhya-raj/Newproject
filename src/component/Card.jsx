import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {blue} from '../../config';
import {scale} from '../utils/scale';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library you're using

const Card = ({
  source,
  source1,
  source2,
  text,
  text1,
  pay,
  hours,
  time,
  min,
  icon1,
  icon2,
  number,
  spots,
  rating,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} />
        <View style={styles.iconContainer}>
          <View style={styles.starview}>
            <Image source={source1} style={styles.icon} />
            <Text style={{textAlign:'center'}}>{rating}</Text>
          </View>

          <Image source={source2} style={styles.icon} />
        </View>
      </View>
      <View style={styles.bottomdesc}>
        <View>
          <View style={styles.carPView}>
            <Text style={styles.carP}>{text}</Text>
          </View>
          <Text style={styles.title}>{text1}</Text>
        </View>
        <View style={styles.parkingpaytime}>
          <Text style={styles.pay}>{pay}</Text>
          <Text style={styles.time}>{hours}</Text>
        </View>
      </View>
      <View style={styles.horizontalLine}></View>
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
    marginVertical: 10,
    marginHorizontal: scale(7),
    width: 280,
    padding: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 'auto',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    left: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 20,
    width: 20,
  },
  description: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomdesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: scale(5),
    alignItems: 'center',
  },
  carPView: {
    backgroundColor: '#f6f6f6',
    padding: 5,
    alignItems: 'center',
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  carP: {
    color: blue,
    fontWeight: '400',
    fontSize: 13,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    alignSelf: 'center',
    color: '#242424',
  },
  parkingpaytime: {
    flexDirection: 'row',
  },
  pay: {
    color: blue,
    fontSize: 15,
    fontWeight: '600',
  },
  time: {fontSize: 15, fontWeight: '500', color: '#242424'},
  horizontalLine: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
  timericon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    margin: 1,
  },
  bottomview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  timerview: {
    flexDirection: 'row',
    padding: 5,
  },
  text1: {
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: '#242424',
  },
  text2: {
    color: '#797979',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
  },
  starview: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
  },
});

export default Card;
