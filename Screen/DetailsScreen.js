import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import InputField from "../Components/InputField";
import LargeBtn from "../Components/LargeBtn";
import SimpleTextInput from "../Components/SimpleTextInput";
// import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Setcheckloginfrom } from "../Redux/counterSlice";
import { TextInput } from "react-native-gesture-handler";
const GenderData = ["Female", "Male"];

const DetailsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { data } = route.params;
  console.log(data);
  const [Check, setCheck] = useState();

  const NextScreeen = () => {
    dispatch(Setcheckloginfrom(true));
    navigation.navigate("Home");
  };
  setTimeout(() => {
    var formdata = new FormData();
    formdata.append("mobile", "8115854528");
    formdata.append("name", "Newton");
    formdata.append("type", "CUSTOMER");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://groupick.lyteinfotech.com/api/v1/auth/signup/",
      requestOptions
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
  }, );
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 70, width: 130 }}
            source={require("../Assets/IMages/login1.png")}
          />
        </View>
        <TouchableOpacity>
          <View
            style={{
              alignSelf: "center",
              height: 135,
              //   backgroundColor: "black",
              borderWidth: 1,
              width: 135,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ justifyContent: "center", marginTop: 30 }}
              source={require("../Assets/IMages/image.png")}
            />
            <View style={{ marginTop: 10 }}>
              <Text>Upload image</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
          {/* <</View> */}
          <InputField placeholder="Mobile number" value={data} type="numeric" />
          <InputField placeholder="Full Name" />
          <InputField placeholder="Email" />
          <FlatList
            data={GenderData}
            horizontal={true}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setCheck(index)}>
                <View
                  style={{
                    // flexDirection: "row",
                    borderWidth: 1,
                    alignItems: "center",
                    // width: "105%",
                    width: 160,
                    height: 40,
                    justifyContent: "center",
                    marginTop: 5,
                    alignSelf: "center",
                    // backgroundColor: Check == index ? "#FF4400" : null,
                    // borderColor: Check == index ? "#FF4400" : null,
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{ color: Check == index ? "black" : "#B9B9B9" }}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
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
            <TextInput style={{ marginLeft: 10 }} placeholder="Birthday" />
          </View>
          {/* <SimpleTextInput placeholderText="Birthday" />
          <SimpleTextInput placeholderText="Adress" /> */}
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
            <TextInput style={{ marginLeft: 10 }} placeholder="Adress" />
          </View>
          <View></View>
        </View>
        {/* <View
          style={{ borderWidth: 1, marginTop: 10, borderColor: "#D0D0D0" }}
        /> */}

        <TouchableOpacity
          style={{ width: "95%", alignSelf: "center" }}
          onPress={() => NextScreeen()}
        >
          <View
            style={{
              borderWidth: 1,
              marginTop: 15,
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
  );
};

export default DetailsScreen;
