import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {scale, verticalScale} from '../utils/scale';
import Header from '../component/Header';
import CardHori from '../component/CardHori';
import {blue} from '../../config';

const data1 = [
  {
    id: 1,
    source: require('../../assets/Image/homepageimage.jpeg'),
    source1: require('../../assets/Image/heart.png'),
    rating: '4.2',
    text: 'Car Parking',
    text1: 'ParkEase Pro',
    pay: '$ 5.00',
    hours: '/hr',
    time: '5',
    min: 'min',
    location: 'New York , USA',
    locationicon: require('../../assets/Image/location.png'),
    icon1: require('../../assets/Image/time.png'),
    icon2: require('../../assets/Image/spot.png'),
    number: '28',
    spots: 'spots',
  },
  {
    id: 2,
    source: require('../../assets/Image/homepageimage.jpeg'),
    source1: require('../../assets/Image/heart.png'),
    rating: '4.2',
    text: 'Car Parking',
    text1: 'ParkEase Pro',
    pay: '$ 5.00',
    hours: '/hr',
    time: '5',
    min: 'min',
    location: 'New York , USA',
    locationicon: require('../../assets/Image/location.png'),
    icon1: require('../../assets/Image/time.png'),
    icon2: require('../../assets/Image/spot.png'),
    number: '28',
    spots: 'spots',
  },
  {
    id: 3,
    source: require('../../assets/Image/homepageimage.jpeg'),
    source1: require('../../assets/Image/heart.png'),
    rating: '4.2',
    text: 'Car Parking',
    text1: 'ParkEase Pro',
    pay: '$ 5.00',
    hours: '/hr',
    time: '5',
    min: 'min',
    location: 'New York , USA',
    locationicon: require('../../assets/Image/location.png'),
    icon1: require('../../assets/Image/time.png'),
    icon2: require('../../assets/Image/spot.png'),
    number: '28',
    spots: 'spots',
  },
];
const Favorite = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          title={'Favorite'}
          source={require('../../assets/Image/search.png')}
        />
        <View style={styles.papularcard}>
          <FlatList
            data={data1}
            style={styles.flatitem}
            renderItem={({item}) => {
              return (
                <CardHori
                  source={item.source}
                  source1={item.source1}
                  source2={item.source2}
                  rating={item.rating}
                  text={item.text}
                  text1={item.text1}
                  pay={item.pay}
                  hours={item.hours}
                  location={item.location}
                  locationicon={item.locationicon}
                  time={item.time}
                  min={item.min}
                  icon1={item.icon1}
                  icon2={item.icon2}
                  number={item.number}
                  spots={item.spots}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => {
              item.id;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Favorite;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  papularcard: {
    marginHorizontal: scale(10),
    marginVertical: verticalScale(10),
  },
  papularview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
  },
  parking: {
    fontSize: 20,
    fontWeight: '600',
  },
  seeall: {
    fontSize: 16,
    color: blue,
  },
  separator: {
    marginHorizontal: scale(5),
  },
  flatitem: {
    paddingBottom: 60,
  },
});
