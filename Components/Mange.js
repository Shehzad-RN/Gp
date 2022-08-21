/** @format */

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";
const Manageaccount = [
  {
    title: "I am unable to login to my account",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "Something is wrong with my wishlist",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "I want to unsubscribe from promotional emails and SMS",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "I have an issue with my referral points",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
];
const Manage = props => {
  return (
    <View
      style={
        {
          // marginTop: "15%",
        }
      }
    >
      <View style={{ width: "100%", backgroundColor: "#fff" }}>
        <View
          style={{
            width: "94%",

            alignSelf: "center",
            height: 47,
            // justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => props.navigation.pop()}
            >
              <Entypo name="arrow-long-left" size={24} color="black" />

              <Text
                style={{
                  fontSize: 13,
                  marginTop: 2,
                  marginLeft: 5,
                  color: "#838383",
                  fontSize: 13,
                }}
              >
                HELP CENTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          height: "2%",
        }}
      />
      <View
        style={{
          height: 65,
          width: "100%",
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          MANAGE YOUR ACCOUNT
        </Text>
      </View>
      {Manageaccount.map(item => {
        return (
          <View>
            <View
              style={{
                height: 2,
              }}
            />

            <TouchableOpacity
              onPress={() => props.navigation.navigate("Manage1")}
            >
              <View
                style={{
                  height: 65,
                  backgroundColor: "white",
                  flexDirection: "row",
                  //   justifyContent: "space-between",
                  // padding: 20,
                  paddingHorizontal: 25,
                  paddingTop: 15,
                }}
              >
                <View
                  style={{
                    width: "80%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#6F6F6F",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View
                  style={{
                    // backgroundColor: "pink",
                    width: "20%",
                    // justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  {item.arrow}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
export default Manage;
