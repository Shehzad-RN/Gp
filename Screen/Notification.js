import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
const Data = [
  {
    title: "Liked what you bought ?",
    imagpath: require("../Assets/IMages/Notification/not1.png"),
    description:
      "Tell us about the Wine Solid Cut Outs Gown... you recently bought. we'd love to know about your experience.",
    time: "6 days ago",
  },
  {
    title: "Order Delivered!",
    imagpath: require("../Assets/IMages/Notification/not2.png"),
    description:
      "Your order Black Colorblocked Wrap Dress... has been delivered",
    time: "14 days ago",
  },
];
const Notification = props => {
  return (
    <View>
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
                MY NOTIFICATIONS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <FlatList
          data={Data}
          renderItem={({ item, index }) => (
            <View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <View
                  style={
                    {
                      // marginLeft: index == 1 ? -60 : 0,
                      // marginTop: index == 1 ? 30 : 0,
                    }
                  }
                >
                  <Image
                    style={{
                      height: 70,
                      width: 120,
                      marginLeft: index == 1 ? -35 : null,
                    }}
                    source={item.imagpath}
                  />
                </View>
                <View
                  style={{
                    marginLeft: index == 1 ? -30 : -70,
                    marginTop: index == 1 ? 8 : 12,
                    width: "80%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#181818",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{ marginTop: 8 }}>{item.description}</Text>
                  <Text style={{ marginTop: 8 }}>{item.time}</Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#E0E0E0",
                  width: "100%",
                  height: 10,
                }}
              />
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Notification;
