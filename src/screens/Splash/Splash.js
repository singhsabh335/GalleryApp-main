import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const {height, width} = Dimensions.get('window');

const Splash = props => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      // alert('This is Splash Screen');
      props.navigation.navigate('Login');
      setIsVisible(true);
    }, 3000);
  }, []);
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 35, color: 'red'}}>CryptoXpress</Text>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
