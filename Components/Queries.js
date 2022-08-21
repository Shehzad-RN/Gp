/** @format */

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";
const Queries = props => {
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
                Queries
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
          width: "100%",
          height: 70,
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <Text>All Queries</Text>
      </View>
      <View
        style={{
          height: "2%",
        }}
      />
    </View>
  );
};
export default Queries;
