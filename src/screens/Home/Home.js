import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {ImagePath} from '../Utils/ImagePath';
const {height, width} = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.cantainets}>
      <View style={styles.main1}>
        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            alignSelf: 'center',
            backgroundColor: 'skyblue',
          }}>
          <TextInput
            placeholder=" Value of transaction"
            style={styles.textInput}
          />
        </View>

        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            alignSelf: 'center',
            backgroundColor: 'skyblue',
          }}>
          <TextInput
            placeholder="Enter address for send Eth"
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity >
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  cantainers: {
    flex: 1,
    backgroundColorL: 'white',
  },
  //===================== back and share arrow======
  textInput: {
    height: height * 0.07,
    width: width * 0.87,
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 11,
    backgroundColor: 'rgb(205,225,225)',
  },
  main1: {
    height: height * 0.8,
    width: width * 0.9,
    alignSelf: 'center',
    // justifyContent: 'center',
    marginTop: height * 0.04,
    backgroundColor: 'red',
  },
});
