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
import Custombutton from '../../component/Custombuton';
import Header from '../../component/Header';
import {verticalScale} from '../../utils/scale';
import {blue, grey} from '../../../config';
const data = [
  {
    id: 1,
    currentStatus: 'Today',
    type: 'Money add to Wallet',
    amount: '+5000.00',
    date: '4 october | 4.10 pm',
    totalbalance: '$12,00.00',
  },
  {
    id: 2,
    currentStatus: 'Yesterday',
    type: 'Booking No #7589409',
    amount: '- 500.00',
    date: '6 october | 5.10 pm',
    totalbalance: '$11,00.00',
  },
  {
    id: 3,
    currentStatus: '3 october 2023',
    type: 'Booking No #7589409',
    amount: '- 500.00',
    date: '6 october | 5.10 pm',
    totalbalance: '$11,00.00',
  },
  {
    id: 3,
    currentStatus: '3 october 2023',
    type: 'Booking No #7589409',
    amount: '- 500.00',
    date: '6 october | 5.10 pm',
    totalbalance: '$11,00.00',
  },
  {
    id: 4,
    currentStatus: '3 october 2023',
    type: 'Booking No #7589409',
    amount: '- 500.00',
    date: '6 october | 5.50 pm',
    totalbalance: '$11,00.00',
  },
];

const item = ({item, index}) => {
  // Check if the current item is the first occurrence of its currentStatus
  const isFirstOccurrence =
    index === data.findIndex(i => i.currentStatus === item.currentStatus);

  return (
    <View style={{marginTop: isFirstOccurrence ? 10 : 5}}>
      {isFirstOccurrence && (
        <Text style={styles.historydate}>{item.currentStatus}</Text>
      )}
      <View style={styles.item}>
        <View style={styles.firstLine}>
          <Text style={styles.title}>{item.type}</Text>
          <Text style={styles.newbalance}>{item.amount}</Text>
        </View>
        <View style={styles.firstLine}>
          <Text style={styles.time}>{item.date}</Text>
          <Text style={styles.totalbalance}>{item.totalbalance}</Text>
        </View>
      </View>
    </View>
  );
};

const Wallet = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={'Wallet'} />
        <View style={styles.addcard}>
          <View style={styles.cardtop}>
            <View>
              <Text style={styles.balancetitle}>Wallet Balance</Text>
              <Text style={styles.balance}>$1200.00</Text>
            </View>
            <View>
              <Image source={require('../../../assets/Image/wallet.png')} />
            </View>
          </View>
          <Custombutton
            text={'Add Money'}
            customContainerStyle={styles.moneybutton}
          />
        </View>
        <View style={styles.history}>
          <FlatList data={data} renderItem={item} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  addcard: {
    backgroundColor: '#f3ecff',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 25,
  },
  cardtop: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  balancetitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
    borderRadius: 8,
  },
  balance: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
  moneybutton: {
    alignSelf: 'center',
    marginTop: 10,
    width: '100%',
  },
  history: {
    margin: 20,
  },
  historydate: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  item: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: grey,
    marginTop: 2,
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  newbalance: {
    color: 'green',
    fontSize: 16,
    fontWeight: '500',
  },
  time: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
  },
  totalbalance: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
  },
});
