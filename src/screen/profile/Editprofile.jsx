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
import DatePicker from 'react-native-date-picker';
import Header from '../../component/Header';
import {scale, verticalScale} from '../../utils/scale';
import {blue} from '../../../config';
import Customdropdown from '../../component/Customdropdown';
import CustomDatepicker from '../../component/CustomDatepicker';
import Custombutton from '../../component/Custombuton';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState(0);
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  // const formattedDate = date ? formatDate(date) : 'DD/MM/YYYY';
  const formatDate = date => {
    // Check if date is not null before accessing its methods
    if (date) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    } else {
      return 'DD/MM/YYYY'; // Return a default value or handle accordingly
    }
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
              onChangeText={text => setNumber(text)}
              value={number}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>DOB:</Text>
            <TouchableOpacity
              onPress={() => {
                setOpen(true);
                formatDate(date);
              }}
              style={styles.input}>
              <Text>{date ? formatDate(date) : 'DD/MM/YYYY'}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date || new Date()}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Gender:</Text>
            <Customdropdown />
          </View>
        </View>
        <Custombutton
          text={'Update Profile'}
          customContainerStyle={styles.btn}
        />
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
    marginVertical: verticalScale(15),
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
    marginVertical: 5,
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
  btn: {
    alignSelf: 'center',
    width: scale(330),
    marginTop: 50,
    borderRadius: 30,
  },
});
