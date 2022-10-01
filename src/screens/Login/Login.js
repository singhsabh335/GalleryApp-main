import React, {useState, useEffect} from 'react';
import {
  Platform,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  Alert,
  Modal,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Login = props => {
  const [loader, setLoader] = useState(false);

  const [mylogo, setMylogo] = useState({}); // View Logo State
  const [Email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [Password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(true);
  const [errorPassword, setErrorPassword] = useState(null);
  const [isvisilePassword, setvisiblePassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // PopUp Confirm

  const [backgroundimg, setBackgroundImg] = useState([]);
  const [listlogo, setListLogo] = useState([]);
  // console.log("==LogoImage===", listlogo);

  const [viewlogo, setViewLogo] = useState([]);

  const _emailvalidate = mail => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var PhoneRegex = /^([0-9]){3,10}$/;
    if (mail === '') {
      setErrorEmail('*Please enter any amount.');
    } else if (!(emailRegex.test(mail) | PhoneRegex.test(mail))) {
      setErrorEmail('*Please enter amount which you have in wallet.');
    } else {
      setErrorEmail(null);
    }
  };

  const _passwordvalidate = pass => {
    var passwordRegex = /^[a-zA-Z0-9\s,'-]*$/;
    // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (pass === '') {
      setErrorPassword('*Please enter address.');
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('*Please enter valid valid address.');
    } else {
      setErrorPassword(null);
    }
  };

  const validate = () => {
    let flag = true;
    if (Email === '') {
      setErrorEmail('*Please enter email.');
      flag = false;
    }
    if (Password === '') {
      setErrorPassword('*Please enter password.');
      flag = false;
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      props.navigation.navigate('LoginSuccess', {
        email: Email,
        password: Password,
      });
    } else {
      Alert.alert('Please fill above details');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={styles.backLogo}>
            <View style={styles.logoView}>
              <Image
                source={require('../../assets/images/Signup1.png')}
                style={{height: height / 4.1, width: width / 1.1}}
                resizeMode="contain"
              />
            </View>
            <View style={styles.logoView1}>
              <Text
                style={{fontSize: 21, color: '#01BF02', fontWeight: 'bold'}}>
                CryptoXpress
              </Text>
            </View>
            <View style={styles.container}>
              <View style={styles.datacontainer}>
                <View style={styles.dataV}>
                  <View style={styles.maindatainput}>
                    <View style={styles.datainput}>
                      <TextInput
                        style={styles.input}
                        placeholderTextColor="#C5C5C5"
                        placeholder="Enter the value of transaction"
                        maxLength={256}
                        autoCapitalize="none"
                        onChangeText={txt => {
                          setEmail(txt), _emailvalidate(txt);
                        }}
                      />
                    </View>
                    {errorEmail != null ? (
                      <View
                        style={{
                          height: height * 0.02,
                          // width: width * 1,
                          width: width / 1.3,
                          // backgroundColor: "cyan",
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{color: 'red', fontSize: 8, marginLeft: 17}}>
                          {errorEmail}
                        </Text>
                      </View>
                    ) : null}
                  </View>

                  <View style={styles.maindatainput}>
                    <View
                      style={[
                        styles.datainput,
                        {
                          width: width * 0.83,
                          flexDirection: 'row',
                        },
                      ]}>
                      <TextInput
                        style={[styles.input, {marginLeft: height * 0.045}]}
                        placeholderTextColor="#C5C5C5"
                        secureTextEntry={
                          isvisilePassword == false ? true : false
                        }
                        placeholder="Address for send the amount"
                        maxLength={16}
                        keyboardType="default"
                        onChangeText={txt => {
                          setPassword(txt), _passwordvalidate(txt);
                        }}
                      />
                      {/**
                    
                      <View
                        style={{
                          height: 30,
                          width: 36,
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            setvisiblePassword(!isvisilePassword);
                          }}>
                          {isvisilePassword == false && (
                            <Image
                              source={require('../../assets/images/HideEye.png')}
                              style={{
                                height: 12,
                                width: 18,
                                marginBottom: 0,
                                tintColor: 'black',
                                marginLeft: -height * 0.02,
                              }}
                              height={12}
                              width={18}
                            />
                          )}

                        {/**  {isvisilePassword == true && (
                            <Image
                              resizeMode={'stretch'}
                              source={require('../../assets/images/ShowPassword.png')}
                              style={{
                                height: 12,
                                width: 18,
                                marginBottom: 0,
                                tintColor: 'black',
                                marginLeft: -height * 0.02,
                              }}
                              height={12}
                              width={18}
                            />
                          )}
                          </TouchableOpacity>
                      </View>
                     */}
                    </View>
                    {errorPassword != null ? (
                      <View
                        style={{
                          height: height * 0.02,
                          // width: width * 1,
                          width: width / 1.3,
                          // backgroundColor: 'red',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{color: 'red', fontSize: 8, marginLeft: 17}}>
                          {errorPassword}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </View>

                <View style={styles.forgotview}></View>
                <View style={styles.loginView}>
                  <TouchableOpacity
                    onPress={() => onSubmit()}
                    style={{
                      height: height * 0.06,
                      width: width * 0.8,
                      alignSelf: 'center',
                      borderRadius: 11,
                      backgroundColor: '#01BF02',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Send
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.dontV}></View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    height: height / 1,
    width: width / 1,
    backgroundColor: 'aliceblue',
  },
  backLogo: {
    height: height * 1,
    width: width * 1,
  },
  logoView: {
    height: height / 3.7,
    width: width / 1,
    // backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoView1: {
    // height: height / 4,
    height: height / 4.5,
    width: width / 1,
    // backgroundColor: "cyan",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  container: {
    height: height / 2.3,
    width: width / 1,
    // backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
  },
  datacontainer: {
    height: Platform.OS === 'android' ? height / 2.6 : height / 2.5,
    width: width / 1.1,
    backgroundColor: 'white',
    // backgroundColor: "red",
    borderRadius: 35,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  dataV: {
    height: height / 6,
    width: width / 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "gold",
    top: height / 50,
    // padding:height/150
  },
  // seprater: {
  //   height: height / 40,
  //   backgroundColor: 'cyan',
  //   width:width/1.2
  // },
  datainput: {
    height: height / 16,
    width: width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // backgroundColor: "pink",
    borderRadius: 25,
    borderColor: '#00000010',
    borderWidth: 1,
  },
  maindatainput: {
    height: height / 12.5,
    width: width / 1.2,
    // justifyContent: "center",
    alignItems: 'center',
    // backgroundColor: "#FFFFFF",
    // backgroundColor: "green",
  },
  input: {
    height: height / 20,
    // width: width / 1.3,
    width: width * 0.72,
    backgroundColor: '#FFFFFF',
    // backgroundColor: "red",
    borderRadius: 25,
    fontWeight: '400',
    fontSize: height / 50,
    padding: 3,
    color: 'black',
  },
  forgotview: {
    height: height / 13,
    width: width / 1.2,
    // backgroundColor: "cyan",
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  forgottext: {
    fontSize: height / 45,
    fontWeight: '700',
    color: '#01BF02',
    fontFamily: 'OpenSans-Light',
  },
  loginView: {
    height: height / 13,
    width: width / 1.2,
    // backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
  },

  dontV: {
    height: height / 16,
    width: width / 1.35,
    // top: 5,
    // backgroundColor: "red",
    // backgroundColor: "pink",
    // justifyContent: "space-evenly",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt: {
    color: '#000000',
    fontSize: height / 55,
    textAlign: 'center',
    fontWeight: '500',
    // fontFamily: "Tahoma",
    fontFamily: 'OpenSans-Regular',
  },
  txt1: {
    // color: "white",
    fontSize: height / 55,
    textAlign: 'center',
    fontWeight: '700',
    color: '#01BF02',
    fontFamily: 'OpenSans-Regular',
  },
  // ----- Popup Starts
  centeredView: {
    height: height * 0.79,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: height / 4.2,
    width: width / 1.3,
    marginTop: Platform.OS === 'android' ? 100 : 150,
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
    borderColor: '#00be01',
    justifyContent: 'space-between',
    borderWidth: 4,
  },
  modaltextView: {
    height: height / 12,
    width: width / 1.35,
    justifyContent: 'center',
  },
  modalText: {
    fontSize: height / 55,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    height: height / 16,
    width: width / 1.55,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#00be01',
  },
  // ----- Popup Ends
});
