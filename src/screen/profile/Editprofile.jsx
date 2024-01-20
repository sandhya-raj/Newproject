import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Picker,
  TextInput,
  Modal,
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
    route: 'Editprofile',
  },
  {
    id: 3,
    source: require('../../../assets/Image/wallet.png'),
    source1: require('../../../assets/Image/chevron.png'),
    text: 'My Wallet',
    route: 'Editprofile',
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

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const genderOptions = ['Select Gender', 'Male', 'Female', 'Other'];

  const handleGenderSelect = selectedGender => {
    setGender(selectedGender);
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={'Profile'} />
        <View style={styles.profileview}>
          <Image
            source={require('../../../assets/Image/homepageimage.jpeg')}
            style={styles.profile}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Phone Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>DOB:</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/YYYY"
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender:</Text>
            <TouchableOpacity style={styles.picker} onPress={toggleModal}>
              <Text>{gender || 'Select Gender'}</Text>
            </TouchableOpacity>

            <Modal
              transparent={true}
              animationType="slide"
              visible={isModalVisible}
              onRequestClose={toggleModal}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  {genderOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.modalOption}
                      onPress={() => handleGenderSelect(option)}>
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
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
  form: {
    marginHorizontal: 20,
  },
  lable: {
    fontSize: 17,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 13,
    borderRadius: 8,
    width: '100%',
    height: 45,
    backgroundColor: '#f6f6f6',
  },

  inputContainer: {
    marginVertical: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
