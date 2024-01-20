import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {blue, grey} from '../../../config';
import {scale, verticalScale} from '../../utils/scale';
const data1 = [
  {
    id: 1,
    source: require('../../../assets/Image/homepageimage.jpeg'),
    source1: require('../../../assets/Image/heart.png'),
    rating: '4.5',
    text: 'Car Parking',
    text1: 'ParkEase Pro',
    pay: '$ 5.00',
    hours: '/hr',
    time: '5',
    min: 'min',
    location: 'New York , USA',
    locationicon: require('../../../assets/Image/location.png'),
    btn1: 'Re-book',
  },
  {
    id: 2,
    source: require('../../../assets/Image/homepageimage.jpeg'),
    source1: require('../../../assets/Image/heart.png'),
    rating: '4.5',
    text: 'Car Parking',
    text1: 'ParkEase Pro jhskfsj ',
    pay: '$ 5.00',
    hours: '/hr',
    time: '5',
    min: 'min',
    location: 'New York , USA',
    locationicon: require('../../../assets/Image/location.png'),
    btn1: 'Re-book',
  },
  {
    id: 3,
    source: require('../../../assets/Image/homepageimage.jpeg'),
    source1: require('../../../assets/Image/heart.png'),
    rating: '4.5',
    text: 'Car Parking',
    text1: 'ParkEase Pro jhskfsj ',
    pay: '$ 5.00',
    hours: '/hr',
    time: '5',
    min: 'min',
    location: 'New York , USA',
    locationicon: require('../../../assets/Image/location.png'),
    btn1: 'Re-book',
  },
];
const Item = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.starview}>
        <Image
          source={require('../../../assets/Image/star.png')}
          style={styles.staricon}
        />
        <Text style={{textAlign: 'center', fontSize: 13, marginLeft: 2}}>
          {item.rating}
        </Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.carPView}>
            <Text style={styles.carP}>{item.text}</Text>
          </View>
          <Text style={styles.title}>{item.text1}</Text>
          <View style={styles.locationnameview}>
            <Image
              source={require('../../../assets/Image/location1.png')}
              style={styles.locationicon}
            />
            <Text style={styles.subtext}>{item.location}</Text>
          </View>
          <View style={styles.parkingpaytime}>
            <Text style={styles.pay}>{item.pay}</Text>
            <Text style={styles.time}>{item.hours}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomview}>
        <View style={styles.btn1}>
          <TouchableOpacity>
            <Text style={styles.timer}>{item.btn1}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const Cancel = () => {
  return (
    <View style={styles.flat}>
      <FlatList
        data={data1}
        renderItem={Item}
        keyExtractor={item => {
          item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flat: {
    flex: 1,
    marginBottom: 45,
  },
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
    width: scale(85),
  },
  carP: {
    color: blue,
    fontWeight: '400',
    fontSize: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
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
  time: {fontSize: 15, fontWeight: '500', color: grey},
  timericon: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    margin: 1,
  },

  text1: {
    margin: 1,
    fontWeight: '600',
    fontSize: 18,
    color: '#242424',
  },
  locationnameview: {
    flexDirection: 'row',
    marginVertical: verticalScale(2),
  },
  locationicon: {
    height: 15,
    width: 15,
    alignSelf: 'center',
  },
  subtext: {
    fontSize: 13,
    color: '#797979',
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
  bottomview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  btn1: {
    backgroundColor: blue,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '98%',
  },
  timer: {
    color: 'white',
  },
});

export default Cancel;
