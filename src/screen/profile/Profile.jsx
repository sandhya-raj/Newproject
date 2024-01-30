import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../../component/Header';
import {verticalScale} from '../../utils/scale';
import {blue} from '../../../config';

const data = [
  {
    id: 1,
    source: require('../../../assets/Image/profile.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'Your Profile',
    route: 'edit',
  },
  {
    id: 2,
    source: require('../../../assets/Image/payment.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'Payment Methods',
    route: 'Payment',
  },
  {
    id: 3,
    source: require('../../../assets/Image/wallet.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'My Wallet',
    route: 'Wallet',
  },
  {
    id: 4,
    source: require('../../../assets/Image/settings.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'Settings',
    route: 'Editprofile',
  },
  {
    id: 5,
    source: require('../../../assets/Image/help.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'Help Center',
    route: 'Editprofile',
  },
  {
    id: 6,
    source: require('../../../assets/Image/privacy.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'Privacy Policy',
    route: 'Editprofile',
  },
  {
    id: 7,
    source: require('../../../assets/Image/invites.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'Invite Friends',
    route: 'Editprofile',
  },
  {
    id: 8,
    source: require('../../../assets/Image/logout.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'Log out',
    route: 'Editprofile',
  },
];

const Profile = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemsview}>
        <View style={styles.leftITem}>
          <Image source={item.source} style={styles.firsticon} />
          <Text style={styles.itmtext}>{item.text}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.route);
            }}>
            <Image source={item.source1} style={styles.firsticon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={'Profile'} />
        <View style={styles.profileview}>
          <Image
            source={require('../../../assets/Image/homepageimage.jpeg')}
            style={styles.profile}
          />
          <Text style={styles.profiletext}>sandhya raj</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => {
            item.id;
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileview: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profiletext: {
    fontSize: 20,
    marginVertical: verticalScale(10),
    textAlign: 'center',
  },
  itemsview: {
    marginHorizontal: 15,
    marginVertical: verticalScale(12),
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  leftITem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firsticon: {
    height: 25,
    width: 25,
    alignSelf: 'center',
  },
  itmtext: {
    color: blue,
    fontSize: 18,
    marginLeft: 15,
    textAlign: 'center',
    fontWeight: '400',
  },
});
