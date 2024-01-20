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
import {blue} from '../../config';

const data = [
  {
    id: 1,
    image: require('../../assets/Image/home.png'),
    imageSelected: require('../../assets/Image/home1.png'),
    label: 'Home',
    route: 'Home',
  },
  {
    id: 2,
    image: require('../../assets/Image/explore.png'),
    imageSelected: require('../../assets/Image/explore1.png'),
    label: 'Explore',
    route: 'Explore',
  },
  {
    id: 3,
    image: require('../../assets/Image/favorite1.png'),
    imageSelected: require('../../assets/Image/favorite.png'),
    label: 'Favorite',
    route: 'Favorite',
  },
  {
    id: 4,
    image: require('../../assets/Image/parking.png'),
    imageSelected: require('../../assets/Image/Parking1.png'),
    label: 'Parking',
    route: 'Parking',
  },
  {
    id: 5,
    image: require('../../assets/Image/profiletab1.png'),
    imageSelected: require('../../assets/Image/profiletab.png'),
    label: 'Profile',
    route: 'Profile',
  },
];
const Tab = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <FlatList
      data={data}
      style={styles.bottom}
      renderItem={({item, index}) => {
        return (
          <View style={styles.tabview}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.route);
                setSelectedTab(index);
              }}>
              <Image
                source={index === selectedTab ? item.imageSelected : item.image}
                style={
                  styles.icon
                  // {tintColor: index === selectedTab ? blue : 'black'},
                }
              />
              <Text
                style={[
                  styles.label,
                  {color: index === selectedTab ? blue : 'black'},
                ]}>
                {item.label}
              </Text>
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
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 4,
  },
  tabview: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 11,
  },
  icon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  lable: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  separator: {
    marginHorizontal: scale(10),
  },
});
