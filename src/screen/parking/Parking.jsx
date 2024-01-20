import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../component/Header';
import {blue} from '../../../config';
import Ongoing from './Ongoing';
import Completed from './Completed';
import Cancelled from './Cancelled';

const Parking = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabPress = index => {
    setSelectedTab(index);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Ongoing />;
      case 1:
        return <Completed />;
      case 2:
        return <Cancelled />;
      default:
        return null;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={'Parking'} />
        <View style={styles.topitem}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 0 && styles.selectedTab]}
            onPress={() => handleTabPress(0)}>
            <Text style={selectedTab === 0 ? styles.selectedText : styles.text}>
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
            onPress={() => handleTabPress(1)}>
            <Text style={selectedTab === 1 ? styles.selectedText : styles.text}>
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
            onPress={() => handleTabPress(2)}>
            <Text style={selectedTab === 2 ? styles.selectedText : styles.text}>
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>
        {renderContent()}
      </View>
    </ScrollView>
  );
};

export default Parking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  topitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    margin: 10,
  },
  tab: {
    borderBottomWidth: 2,
    borderBottomColor: 'transparent', // Initially transparent
    paddingBottom: 8,
    width: 100,
    alignItems: 'center',
  },
  selectedTab: {
    borderBottomColor: blue,
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
  },
  selectedText: {
    color: blue,
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
  },
});
