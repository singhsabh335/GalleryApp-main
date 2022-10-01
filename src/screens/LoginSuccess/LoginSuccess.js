import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';

const {height, width} = Dimensions.get('window');

const LoginSuccess = props => {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', props);
  const [Email, setEmail] = useState(props.route.params.email);
  const [Password, setPassword] = useState(props.route.params.password);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
      }}>
      <View
        style={{height: height * 0.4, width: width * 0.9, alignSelf: 'center'}}>
        <Text style={{fontSize: 21, color: 'red'}}>
          {' '}
          Amount:{'    '}
          {Password}
        </Text>
        <Text style={{fontSize: 21, color: 'orange'}}>
          {' '}
          Address:{'   '}
          {Email}{' '}
        </Text>
      </View>
    </View>
  );
};

export default LoginSuccess;

const styles = StyleSheet.create({});
