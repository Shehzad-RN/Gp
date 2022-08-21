/** @format */

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";
const Otherhelp = [
  {
    title: "I have an issue with the mobile app",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "I have a query on return / exchange process",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "Other",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title:
      "My order is not confirmed/ I have not got my  order ID/ My order status is not updated in My orders/ What is happening to my order",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title:
      "Why is T&B not available for my pin code? Can you please expedite the order delivery?",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "Can I use my gift card to make a purchase?",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
];
const Other = props => {
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
          OTHER
        </Text>
      </View>
      {Otherhelp.map(item => {
        return (
          <View style={{ justifyContent: "center" }}>
            <View
              style={{
                height: 2,
              }}
            />

            <TouchableOpacity
              onPress={() => props.navigation.navigate("Other1")}
            >
              <View
                style={{
                  height: 74,
                  backgroundColor: "white",
                  flexDirection: "row",
                  paddingHorizontal: 25,
                  // paddingTop: 15,
                  alignItems: "center",
                  // justifyContent: "center",
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
                    width: "20%",
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
export default Other;
