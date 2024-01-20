import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import TabBar from '../component/Tabbar';
import {blue} from '../../config';
import {scale, verticalScale} from '../utils/scale';
import Card from '../component/Card';
import CardHori from '../component/CardHori';
const data = [
  {
    id: 1,
    source: require('../../assets/Image/homepageimage.jpeg'),
    source1: require('../../assets/Image/star.png'),
    source2: require('../../assets/Image/heart.png'),
    rating: '4.5',
    text: 'Car Parking',
    text1: 'ParkEase Pro',
    pay: '$ 5.00',
    hours: '/hr',
    time: '5',
    min: 'min',
    icon1: require('../../assets/Image/time.png'),
    icon2: require('../../assets/Image/spot.png'),
    number: '28',
    spots: 'spots',
  },
  {
    id: 2,
    source: require('../../assets/Image/homepageimage.jpeg'),
    source1: require('../../assets/Image/star.png'),
    source2: require('../../assets/Image/heart.png'),
    rating: '4.5',
    text: 'Car Parking',
    text1: 'ParkEase Pro',
    pay: '$ 5.00',
    hours: '/hr',
    time: '5',
    min: 'min',
    icon1: require('../../assets/Image/time.png'),
    icon2: require('../../assets/Image/spot.png'),
    number: '28',
    spots: 'spots',
  },
];
const data1 = [
  {
    id: 1,
    source: require('../../assets/Image/homepageimage.jpeg'),
    source1: require('../../assets/Image/heart.png'),
    rating: '4.5',
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
    rating: '4.5',
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
const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    console.log('Searching for:', text);
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={blue} barStyle="light-content" />
      <View style={styles.topHead}>
        <View style={styles.locationpart}>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.locationtext}>location</Text>
            <View style={styles.locationnameview}>
              <Image
                source={require('../../assets/Image/location.png')}
                style={styles.locationicon}
              />
              <Text style={styles.subtext}>New York , USA</Text>
              <Image
                source={require('../../assets/Image/downW.png')}
                style={styles.locationicon}
              />
            </View>
          </View>
          <View style={styles.notiview}>
            <Image
              source={require('../../assets/Image/notification.png')}
              style={styles.notificationimg}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/Image/search.png')}
              style={{height: 15, width: 15, alignSelf: 'center'}}
            />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              onChangeText={handleSearch}
              value={searchText}
            />
          </View>
          <View style={styles.filterContainer}>
            <Image
              source={require('../../assets/Image/filter2.png')}
              style={{height: 25, width: 25, alignSelf: 'center'}}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.papularcard}>
          <View style={styles.papularview}>
            <Text style={styles.parking}>Popular Parking</Text>
            <TouchableOpacity>
              <Text style={styles.seeall}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <Card
                  source={item.source}
                  source1={item.source1}
                  source2={item.source2}
                  rating={item.rating}
                  text={item.text}
                  text1={item.text1}
                  pay={item.pay}
                  hours={item.hours}
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
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => {
              item.id;
            }}
          />
        </View>
        <View style={styles.papularcard}>
          <View style={styles.papularview}>
            <Text style={styles.parking}>Nearby Parking</Text>
            <TouchableOpacity>
              <Text style={styles.seeall}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data1}
            style={styles.flatitem}
            renderItem={({item}) => {
              return (
                <CardHori
                  source={item.source}
                  source1={item.source1}
                  text={item.text}
                  rating={item.rating}
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
      </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHead: {
    backgroundColor: blue,
    padding: 40,
    width: '100%',
  },
  locationpart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationimg: {
    height: 30,
    width: 30,
  },
  locationtext: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
  },
  locationnameview: {
    flexDirection: 'row',
  },
  locationicon: {
    height: 15,
    width: 15,
    alignSelf: 'center',
  },
  subtext: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  notiview: {
    backgroundColor: blue,
    borderRadius: 10,
    // Adding shadow for Android
    elevation: 5,
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '80%',
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '20%',
    marginLeft: 5,
    justifyContent: 'center',
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
