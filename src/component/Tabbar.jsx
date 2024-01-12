import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {scale, verticalScale} from '../utils/scale';
import {useNavigation} from '@react-navigation/native';

const Tab = () => {
  const navigation = useNavigation();
  const data = [
    {
      image: require('../../assets/Image/home.png'),
      imageSelected: require('../../assets/Image/home.png'),
      label: 'Home',
      route: 'Home',
    },
    {
      image: require('../../assets/Image/home.png'),
      imageSelected: require('../../assets/Image/home.png'),
      label: 'Explore',
      route: 'Explore',
    },
    {
      image: require('../../assets/Image/home.png'),
      imageSelected: require('../../assets/Image/home.png'),
      label: 'Favorite',
      route: 'Favorite',
    },
    {
      image: require('../../assets/Image/home.png'),
      imageSelected: require('../../assets/Image/home.png'),
      label: 'Booking',
      route: 'Booking',
    },
    {
      image: require('../../assets/Image/home.png'),
      imageSelected: require('../../assets/Image/home.png'),
      label: 'Profile',
      route: 'Profile',
    },
  ];
  return (
    <FlatList
      data={data}
      style={styles.bottom}
      renderItem={item => {
        console.log('item', item);
        return (
          <View style={styles.tabview}>
            <TouchableOpacity
              onPress={() => navigation.navigate(item.item.route)}>
              <Image source={item.item.image} style={styles.icon} />
              <Text style={styles.lable}>{item.item.label}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => {
        item.id;
      }}
    />
  );
};
export default Tab;
const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    // alignItems: 'center',
  },
  tabview: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    height: 35,
    width: 35,
    alignSelf: 'center',
  },
  lable: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  separator: {
    marginHorizontal: scale(15),
  },
});
