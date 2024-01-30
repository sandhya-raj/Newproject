import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {scale, verticalScale} from '../utils/scale';
import {blue} from '../../config';
import Card from '../component/Card';

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

const Explore = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    console.log('Searching for:', text);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 26.9462,
          longitude: 89.7787,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Marker Title"
          description="Marker Description"
          pinColor="blue"
        />
      </MapView>

      <ScrollView>
        <View style={styles.searchView}>
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
            <TouchableOpacity>
              <Image
                source={require('../../assets/Image/filter2.png')}
                style={{height: 25, width: 25, alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.exploreCard}>
          <View style={styles.popularCard}>
            <FlatList
              data={data}
              renderItem={({item}) => (
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
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },

  searchView: {
    flexDirection: 'row',
    marginHorizontal: scale(20),
    position: 'absolute',
    top: scale(50),
    left: 0,
    right: 0,
    zIndex: 1000, // Ensure search bar is above the map
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
    backgroundColor: blue,
    width: '20%',
    marginLeft: 5,
    justifyContent: 'center',
  },
  exploreCard: {
    marginTop: 370,
  },
  popularCard: {
    marginVertical: verticalScale(1),
    marginHorizontal: 10,
  },
  separator: {
    marginHorizontal: scale(1),
  },
});

export default Explore;
