import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
// import LoginButton from "../../../Component/loginbutton";
// import LoginButton from "../../../Component/loginTextInput";
import FormButton from "../Components/Formsbtn";
import { useDispatch } from "react-redux";
import { Setcheckloginfrom } from "../Redux/counterSlice";
import { guestToken } from "../Utils/guestToken";
import { handleAuthTokenSession } from "../Redux/authReducer";

const LOgin = ({navigation, route}) => {
  const { userLog } = route.params;
  
  const dispatch = useDispatch();
  const NextScreen = () => {
    navigation.navigate("Login1", {userLog});
  };

  const storeToken = async () => {
    try {
      // Store guest_token in Redux
      dispatch(handleAuthTokenSession(guestToken))
    } catch (error) {
      console.log('login1/storeToken', error.message);
    }
  }


  const NextScreen1 = () => {
    // Store and Dispatch guest_token 
    storeToken();
    dispatch(Setcheckloginfrom(false));
  };
  return (
    // <ScrollView>
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ height: "2%" }} />
      {/* <View> */}
      <View
        style={{
          alignItems: "center",
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
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 19, color: "#112734" }}>Get Started</Text>
      </View>
      <FormButton
        borderc="#112735"
        buttonTitle={"Log ln"}
        txtcolor="black"
        onPress={NextScreen}
      />
      <View style={{ height: 11 }} />
      <View style={{ alignSelf: "center" }}>
        <Text>Or</Text>
      </View>
      <FormButton
        borderc="#112735"
        buttonTitle={"Join as a Guest"}
        txtcolor="#fff"
        Bakbround="#112734"
        onPress={NextScreen1}
      />
    </View>
  );
};
export default LOgin;
