import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
  Dimensions,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker';
import setting from "../Back-end/Setteing.json";
import InputField from "../Components/InputField";
import FormInput from "../Components/Forminputs";
const { width, height } = Dimensions.get("window");
import LargeBtn from "../Components/LargeBtn";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { Setcheckloginfrom, SetPhoneNumber, setToken } from "../Redux/counterSlice";

import {
  SetUserName,
  SeteEmail,
  setProfileIMage,
  SetGender,
  SetAddress,
  SetBirthDay,
} from "../Redux/counterSlice";
import { handleAuthTokenSession, handleAuthUserBio } from "../Redux/authReducer";
import { OTP } from "../Utils/guestToken";

const slides = [
  {
    id: "1",

    title: "Log ln",
  },
  {
    id: "2",

    title: "Log ln",
  },
];

const Login1 = ({ navigation, route }) => {
  const { userLog } = route.params;

  const dispatch = useDispatch();

  const [firstboder, setfirstboder] = useState(false);
  const [Second, setSecond] = useState(false);
  const [Third, setThird] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [DetailsScreen, setDetails] = useState(false);

  const [checklogin, setChecklogin] = useState();

  const [Check, setCheck] = useState(-1);
  const [PhoneNumber, setPhoneNumber] = useState(0);
  const [optverify, setotpverify] = useState();
  const [username, setusername] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Address, setAddress] = useState("");
  const [Uploading, setUploading] = useState("");
  const [date, setDate] = useState('09-10-2021');
  const [Gender, setGender] = useState();
  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const calling = () => {
    var formdata = new FormData();
    formdata.append("mobile", PhoneNumber);
    formdata.append("name", Uploading);
    formdata.append("email", Email);
    formdata.append("gender", Gender);
    formdata.append("dob", Birthday);
    formdata.append("username", username);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };


    fetch(setting.signup, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
    currentSlideIndex == 0
      ? setfirstboder(true)
      : currentSlideIndex == 1
        ? setSecond(true)
        : currentSlideIndex == 2
          ? setThird(true)
          : null;
  };
  const onChangeNumber = val => {
    dispatch(SetPhoneNumber(val));
    setPhoneNumber(val);
  };
  const handleSendOTP = () => {
    //* Phone Number verification
    if (PhoneNumber === 0) {
      Alert.alert('Alert', 'Enter a valid phone number', [{ text: 'ok' }])
      return false
    }
    var formdata = new FormData();
    formdata.append("mobile", PhoneNumber);
    //* Parameter for mobile number  
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(setting.login, requestOptions)
      .then(Response => Response.json())
      .then(result => {
        result.message == "Mobile is not registered, please signup first."
          ? (console.log(result), setDetails(true))
          : (console.log(result), goToNextSlide())
      })
      .catch(error => console.log("error handleSendOTP", error));
  };

  const storeToken = async (result) => {
    try {
      dispatch(handleAuthUserBio(result.user))
      dispatch(handleAuthTokenSession(result.token))
      if (userLog) navigation.goBack();
    } catch (e) {
      console.log('login1/storeToken', e.message);
    }
  }
  
  const Storage = (result) => { 
    dispatch(setToken(result.token))
    dispatch(Setcheckloginfrom(true))
    const v = result.user;
    dispatch(SetUserName(v.name))
    dispatch(SetPhoneNumber(v.mobile))
   
    // Store Token in AsyncStorage and Store user bio in Redux
    storeToken(result);
  }

  const NextScreeen = () => {
    var formdata = new FormData();
    formdata.append("mobile", PhoneNumber);
    formdata.append("otp", optverify);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(setting.otpvarify, requestOptions)
      .then(response => response.json())
      .then(result =>
        result.message == "Invalid OTP"
          ? alert("please enter valid otp")
          : Storage(result)

      )
      .catch(error => console.log("error", error));
  };

  const GoNextScreeen = async () => {
    handleSendOTP();
  };

  //* User Registeration
  const verifyUserAndRegister = () => {
    const formDataObject = { username, Email, Gender, Address };
    // ASCII characters
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    for (var key in formDataObject) {
      if (key === 'Email' && !mailformat.test(formDataObject[key])) {
        alert(`please enter valid email format`);
        return false
      }
      if (formDataObject[key] === '' || formDataObject[key] === undefined) {
        alert(`please enter ${key}`);
        return false
      }
    }
    setDetails(false);
    calling();
    goToNextSlide();
  };
  const onChangeotp = val => {
    setotpverify(val);
  };
  const onchangeusername = val => {
    dispatch(SetUserName(val));
    setusername(val);
  };
  const onchangeEmail = val => {
    dispatch(SeteEmail(val));
    setEmail(val);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);
    setUploading(result.uri);

    if (!result.cancelled) {
      dispatch(setProfileIMage(result.uri));
      setUploading(result.uri);
    }
  };

  const onchangeGender = val => {
    dispatch(SetGender(val));
    setCheck(val);
  };

  const onchangeAddress = val => {
    dispatch(SetAddress(val));
    setAddress(val);
  };

  const onchangeBirthday = val => {
    dispatch(SetBirthDay(val));
    setBirthday(val);
  };
  return (
    // <ScrollView>
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            //   backgroundColor: "pink",
          }}
        >
          <Image
            style={{ height: 100, width: 150 }}
            source={require("../Assets/IMages/login1.png")}
          />
          <View style={{ height: 4 }} />

          <Image
            style={{ height: 290, width: 290 }}
            source={require("../Assets/IMages/login.png")}
          />
        </View>
        <View>
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            horizontal
            data={slides}
            pagingEnabled
            renderItem={({ item, index }) => (
              <View
                style={{
                  alignItems: "center",
                  height: "70%",

                  width,
                }}
              >
                <Text>{item.title}</Text>
                {index == 0 ? (
                  <View style={{ width: "80%", alignSelf: "center" }}>
                    <FormInput
                      maxl={10}
                      placeholderText={"Mobile Number"}
                      keyboardType="numeric"
                      onChangeText={val => onChangeNumber(val)}
                    />
                    <View>
                      <LargeBtn
                        buttonTitle="Send Otp"
                        borderc="#FF4400"
                        Bakbround="#FF4400"
                        txtcolor="#fff"
                        onPress={() => GoNextScreeen()}
                      />
                    </View>
                  </View>
                ) : (
                  <View style={{ width: "80%", alignSelf: "center" }}>
                    <FormInput
                      placeholderText={"Enter OTP"}
                      keyboardType="numeric"
                      maxl={6}
                      onChangeText={val => onChangeotp(val)}
                    />
                    <View>
                      <LargeBtn
                        buttonTitle="Log ln"
                        borderc="#FF4400"
                        Bakbround="#FF4400"
                        txtcolor="#fff"
                        onPress={() => NextScreeen()}
                      />
                    </View>
                  </View>
                )}
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* 
       //! Note:
        Modal appear if the entered mobile number is not registered yet      
      */}
      <Modal
        // Moda
        visible={DetailsScreen}
        animationType="slide"
        onRequestClose={() => setDetails(false)}
      >
        <View style={{ height: "100%", width: "100%" }}>
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ height: 70, width: 130 }}
                source={require("../Assets/IMages/login1.png")}
              />
            </View>
            <TouchableOpacity onPress={() => pickImage()}>
              <View
                style={{
                  alignSelf: "center",
                  height: 135,
                  //   backgroundColor: "black",
                  borderWidth: 1,
                  width: 135,
                  borderRadius: Uploading ? 100 : 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {Uploading ? (
                  <Image
                    style={{
                      justifyContent: "center",
                      marginTop: 30,
                      height: 133,
                      width: 130,
                      borderRadius: 100,
                    }}
                    source={{ uri: Uploading }}
                  />
                ) : (
                  <Image
                    style={{ justifyContent: "center", marginTop: 30 }}
                    source={require("../Assets/IMages/image.png")}
                  />
                )}

                <View style={{ marginTop: 10 }}>
                  <Text>Upload image</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
              {/* <</View> */}
              <InputField
                placeholder="Mobile number"
                value={PhoneNumber}
                type="numeric"
                setValue={val => setPhoneNumber(val)}
              />
              <InputField
                placeholder="Full Name"
                setValue={val => onchangeusername(val)}
              />
              <InputField
                placeholder="Email"
                setValue={val => onchangeEmail(val)}
              />
              <View style={{ width: '100%' }}>



                <View
                  style={{
                    height: 47,
                    borderWidth: 1,
                    marginTop: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    borderColor: "#AEAEAE",
                  }}
                >
                  <TouchableOpacity onPress={() => setGender("Female")}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: Gender == "Female" ? "black" : "#AEAEAE",
                      }}
                    >
                      Female
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{ borderEndWidth: 1, height: 46, borderColor: "#AEAEAE" }}
                  />
                  <TouchableOpacity
                    onPress={() => setGender("Male")}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: Gender == "Male" ? "black" : "#AEAEAE",
                      }}
                    >
                      Male
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginTop: 15,
                  height: 55,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >

                <DatePicker
                  style={{ width: '100%', paddingHorizontal: 5 }}
                  date={date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY/MM/DD"
                  minDate="1900-01-01"
                  maxDate="2022-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      right: 0,
                      marginLeft: 0,
                    },
                    dateInput: {
                      borderWidth: 0
                    },
                    dateText: {
                      fontSize: 17,
                      width: '100%',
                    }
                  }}
                  onDateChange={(date) => {
                    setDate(date);
                  }}
                />
              </View>


              <View
                style={{
                  borderWidth: 1,
                  marginTop: 15,
                  height: 55,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <TextInput
                  style={{ marginLeft: 10 }}
                  placeholder="Adress"
                  onChangeText={val => onchangeAddress(val)}
                />
              </View>
              <View></View>
            </View>
            {/* <View
          style={{ borderWidth: 1, marginTop: 10, borderColor: "#D0D0D0" }}
        /> */}

            <TouchableOpacity
              style={{ width: "95%", alignSelf: "center" }}
              onPress={verifyUserAndRegister}
            >
              <View
                style={{
                  borderWidth: 1,
                  marginTop: '15%',
                  height: 54,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF4400",
                  borderColor: "#FF4400",
                }}
              >
                <Text style={{ fontSize: 18, color: "#fff" }}>GET STARTED</Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 10 }} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: "#D8D8D8",
    marginHorizontal: 3,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A8E9CA'
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color: "#000"
  }
});
export default Login1;
