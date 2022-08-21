import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
// import { ScrollView } from "react-native-web";
import { Feather } from "@expo/vector-icons";
const Second = () => {
  return (
    // <ScrollView>
    <View style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          height: "50%",
          backgroundColor: "#FAE6DF",
          borderBottomLeftRadius: 400,
          //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ height: "15%" }} />
        <Text>FREE YOUR CLOSET</Text>
        <View style={{ height: "2%" }} />
        <Image source={require("../Assets/IMages/Second.jpeg")} />
      </View>

      <View style={{ height: "10%" }} />
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Looking For Items
        </Text>
        <View style={{ height: 10 }} />
        <Text>Discover What is Best For You and</Text>
        <View style={{ height: 3 }} />
        <Text>Find Your Favorite Product that you want </Text>
        <View style={{ height: 3 }} />
        <Text>to buy easily</Text>
      </View>
      <View style={{ width: "90%", marginTop: "43%", alignSelf: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 100,
              borderColor: "#D8D8D8",
              backgroundColor: "#D8D8D8",
              //   marginTop: -0,
            }}
          />
          <View style={{ width: 3 }} />

          <View
            style={{
              height: 10,
              width: 22,
              borderRadius: 100,
              borderColor: "#FF4400",
              backgroundColor: "#FF4400",
              //   marginTop: -0,
            }}
          />
          <View style={{ width: 3 }} />
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 100,
              borderColor: "#D8D8D8",
              backgroundColor: "#D8D8D8",
              //   marginTop: -0,
            }}
          />
          <View style={{ width: "70%" }} />
          <TouchableOpacity>
            <View
              style={{
                alignSelf: "flex-end",
                justifyContent: "flex-end",
                backgroundColor: "#FF4400",
                justifyContent: "center",
                height: 32,
                width: 50,
                marginTop: -20,
                borderRadius: 20,
              }}
            >
              <Feather
                style={{ alignSelf: "center", justifyContent: "center" }}
                name="arrow-right"
                size={24}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Second;
