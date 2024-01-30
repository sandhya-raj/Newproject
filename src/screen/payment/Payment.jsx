import React, {useState} from 'react';
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

const Payment = ({navigation}) => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={'Payment Method'} />
        <View style={styles.moreview}>
          <Text style={styles.titilemore}>Credit & Debit Card</Text>
        </View>
        <View style={styles.itemsview}>
          <View style={styles.leftITem}>
            <Image
              source={require('../../../assets/Image/payment.png')}
              style={styles.firsticon}
            />
            <Text style={styles.itmtext}>{'Add Card'}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/Image/chevron.png')}
                style={styles.firsticon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.moreview}>
          <Text style={styles.titilemore}>More Payment Options</Text>
        </View>
        <View style={styles.itemsview}>
          <View style={styles.leftITem}>
            <Image
              source={require('../../../assets/Image/payment.png')}
              style={styles.firsticon}
            />
            <Text style={styles.itmtext}>{'Add Card'}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  itemsview: {
    marginHorizontal: 15,
    borderColor: '#f6f6f6',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
    padding: 10,
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
    color: '#797878',
    fontSize: 14,
    marginLeft: 15,
    textAlign: 'center',
    fontWeight: '700',
  },
  moreview: {
    marginHorizontal: 15,
    marginTop: verticalScale(35),
    marginBottom: verticalScale(7),
  },
  titilemore: {
    fontSize: 18,
    fontWeight: '400',
  },
});
